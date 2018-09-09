const { body } = require('express-validator/check');

const checkRegisterData = [
	// username must be an email
	body('name').isString(),
	body('email').isEmail().normalizeEmail(),
	// password must be at least 5 chars long
	body('password').isString().isLength({ min: 6 })
];

module.exports = {
	checkRegisterData
};