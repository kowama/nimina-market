const router = require('express').Router();
const User = require('./../models/User');

router.post('/register', (req, res) => {
	if (req.body.password.length < 6 || req.body.password !== req.body.passwordConfirm) {
		return res.json({
			message: 'password not valid'
		});
	}

	let newuser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		isSeller: req.body.isSeller || false,
		address: req.body.address,
		created: new Date()
	});
	newuser
		.gravatar()
		.save()
		.then((user) => {
			return user.generateAuthToken();
		})
		.then((token) => {
			res.json({
				user: newuser,
				token
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(422).json({
				message: err.errmsg || err.message || 'validation error'
			});
		});
});

router.post('/login', async (req, res) => {
	let password = String(req.body.password);
	if (password.length < 6) {
		return res.json({
			message: 'password not valid'
		});
	}

	try {
		const user = await User.findByCredentials(req.body.email, req.body.password);

		const token = await user.generateAuthToken();
		res.json({
			user,
			token
		});
	} catch (err) {
		console.log(err);
		res.status(422).json({
			message: err
		});
	}
});

module.exports = router;
