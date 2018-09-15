const router = require('express').Router();
const User = require('./../models/User');
const { authToken } = require('./../middleware/authantification');

router.post('/profile', authToken, (req, res) => {
	res.send({
		user: req.user
	});
});
router.post('/update', authToken, async (req, res) => {
	try {
		req.user.set({
			name: req.body.name || req.user.name,
			picture: req.body.picture || req.user.picture,
			email: req.body.email || req.user.email,
			isSeller: req.body.isSeller || req.user.isSeller,
			address: req.body.address || req.user.address
		});
		let passwordUpdated = false;
		if (req.body.updatePassword && req.body.password && req.body.password === req.body.passwordConfirm) {
			req.user.set({
				password: req.body.password
			});
			passwordUpdated = true;
		}

		const updatedUser = await req.user.save();
		if (!updatedUser) {
			return Promise.reject('unable to update user data');
		}
		res.json({
			updatedUser: updatedUser,
			passwordUpdated
		});
	} catch (err) {
		res.status(422).json({
			message: err.errmsg || err.message || 'unable to update user data'
		});
	}
});
router.delete('/logout', authToken, (req, res) => {
	req.user
		.removeToken(req.token)
		.then(() => {
			res.status(200).send({
				message: 'user successfull logout'
			});
		})
		.catch((err) => {
			res.status(422).json({
				message: err
			});
		});
});
module.exports = router;
