const router = require('express').Router();
const { validationResult } = require('express-validator/check');
const User = require('./../models/User');
const { checkRegisterData, checkLoginData } = require('../middleware/validations');

router.post('/signup', checkRegisterData, (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({
			message: 'invalide registration data'
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
			res.header('x-auth', token).json(newuser);
		})
		.catch((err) => {
			console.log(err);
			res.status(422).json({
				message: err.errmsg || err.message || 'error'
			});
		});
});

router.post('/login', checkLoginData, async (req, res) => {
	const errors = validationResult(req);

	try {
		if (!errors.isEmpty()) {
			throw Error('invalide Login data');
		}
		const user = await User.findByCredentials(req.body.email, req.body.password);
		if (!user) {
			return res.status(404).json({
				message: 'user not found'
			});
		}
		const token = await user.generateAuthToken();

		res.header('x-auth', token).json(user);
	} catch (err) {
		console.log(err);
		res.status(422).json(err);
	}
});

module.exports = router;
