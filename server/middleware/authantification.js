const User = require('./../models/User');

const authToken = (req, res, next) => {
	let token = req.header('x-auth');
	User.findByToken(token)
		.then((user) => {
			if (!user) {
				return Promise.reject('token not valid  or expired!');
			}
			req.user = user;
			req.token = token;
			next();
		})
		.catch((err) => {
			res.status(401).send({
				message: err
			});
		});
};

const authSeller = (req, res, next) => {
	if (!req.user.isSeller) {
		res.status(401).json({
			message: 'user is not seller'
		});
	}
};
module.exports = {
	authToken,
	authSeller
};
