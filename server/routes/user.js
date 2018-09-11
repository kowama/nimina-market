const router = require('express').Router();
const { validationResult } = require('express-validator/check');
const User = require('./../models/User');
const { authToken } = require('./../middleware/authantification');

router.post('/profile', authToken, (req, res) => {
	res.send({
		user: req.user.getProfile()
	});
});
router.delete('/logout', authToken, (req, res) => {
	req.user.removeToken(req.token).then(() => {
		res.status(200).send({
			message: 'user susccessfull logout'
		});
	});
});
module.exports = router;
