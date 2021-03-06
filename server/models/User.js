const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { mongodb } = require('./db/mongodb');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv').load({ path: '.env.development' });

const secret = process.env.TOKEN_SECRET;

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
		minlength: 3,
		maxlength: 32,
		validate: {
			validator: (value) => {
				const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return pattern.test(String(value).toLowerCase());
			},
			message: 'email is not valid'
		}
	},
	password: { type: String, required: true, minlength: 6, maxlength: 128 },
	picture: { type: String, required: true },
	isSeller: { type: Boolean, default: true },
	address: {
		addr1: { type: String, default: '' },
		addr2: { type: String, default: '' },
		city: { type: String, default: '' },
		state: { type: String, default: '' },
		country: { type: String, default: '' },
		postalCode: { type: String, default: '' }
	},
	tokens: [
		{
			access: {
				type: String,
				required: true
			},
			token: {
				type: String,
				required: true
			}
		}
	],
	created: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	try {
		let salt = await bcrypt.genSalt(10);
		let hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
		next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.comparePassword = function(password) {
	if (!password) throw new Error('password not define');
	return bcrypt.compareSync(password, this.password);
};

userSchema.methods.toJSON = function() {
	let user = this;
	const { _id, email, name, picture, isSeller, created, address } = user;
	return {
		_id,
		name,
		email,
		picture,
		isSeller,
		address,
		created
	};
};

userSchema.methods.generateAuthToken = async function() {
	let user = this;

	let access = 'auth';
	let token = jwt.sign({ _id: user._id.toHexString(), access }, secret, { expiresIn: '3d' });

	user.tokens = [ ...user.tokens, ...[ { access, token } ] ];
	try {
		await user.save();
		return Promise.resolve(token);
	} catch (err) {
		throw err;
	}
};

userSchema.statics.findByToken = function(token) {
	let User = this;
	let decoded;

	try {
		decoded = jwt.verify(token, secret);
		return User.findOne({
			_id: decoded._id,
			'tokens.token': token,
			'tokens.access': 'auth'
		});
	} catch (err) {
		return Promise.reject(err);
	}
};
userSchema.methods.removeToken = function(token) {
	let user = this;
	return user.update({
		$pull: {
			tokens: { token }
		}
	});
};

userSchema.methods.gravatar = function(size, reset) {
	if (!this.picture || reset) {
		size = size || 200;
		if (!this.email) {
			this.picture = 'https://gravatar.com/avatar/?s=' + size + 'd=retro';
		}
		const md5 = crypto.createHash('md5').update(this.email).digest('hex');
		this.picture = 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
		return this;
	}
	return this;
};

userSchema.statics.findByCredentials = async function(email, password) {
	if (!email || !password) throw Error('email or password not defined !');

	try {
		const user = await this.findOne({ email });
		if (!user) {
			return Promise.reject('user not Found with that email');
		}
		const result = await user.comparePassword(password);
		if (result !== true) {
			return Promise.reject('wrong Password');
		}

		return Promise.resolve(user);
	} catch (err) {
		throw err;
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
