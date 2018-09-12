const router = require('express').Router();
const User = require('./../models/User');
const { authToken } = require('./../middleware/authantification');

router.post('/profile', authToken, (req, res) => {
	res.send({
		user: req.user.getProfile()
	});
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
