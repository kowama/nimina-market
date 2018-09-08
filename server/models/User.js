const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { mongodb } = require('./db/mongodb');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, lowercase: true, required: true },
	password: { type: String, required: true },
	picture: { type: String },
	isSeller: { type: Boolean, default: true },
	address: {
		addr1: String,
		addr2: String,
		city: String,
		state: String,
		country: String,
		postalCode: String
	},
	created: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	try {
		const salt = await bcrypt.genSalt(10);
		const hash = bcrypt.hash(user.password, salt);
		user.password = hash;
		next();
	} catch (err) {
		next(err);
	}
});

userSchema.methods.comparePassword = function(password) {
	if (!password) return Promise.reject(false);
	return bcrypt.compareSync(password, this.password);
};

userSchema.methods.gravatar = function(size) {
	if (!size) {
		size = 200;
	}
	if (!this.email) {
		return `https://gravatar.com/avatar/?s=${size}&d=retro`;
	}
	const md5 = crypto.createHash('md5').update(this.email).digest('hex');
	return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

userSchema.statics.findByCredentials = async function(email, password) {
	if (!email || !password) return Promise.reject('email or password not defined !');

	try {
		const user = await this.find({ email });
		if (!user) {
			throw new Error('user not Found');
		}
		const result = await user.comparePassword(password);
		if (result !== true) {
			throw new Error('wrong password');
		}
		return Promise.resolve(password);
	} catch (err) {
		return Promise.reject(err);
	}
};

const User = mongoose.model('User', userSchema);

module.exports = User;
