const router = require('express').Router();
const { validationResult } = require('express-validator/check');
const User = require('./../models/User');
const { authToken } = require('./../middleware/authantification');

router.post('/product', authToken, (req, res) => {
	res.send({
		user: req.user.getProfile()
	});
});

router.get('/products');

module.exports = router;
