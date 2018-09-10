const User = require('./../models/User');

const authToken = (req, res, next) => {
	let token = req.header('x-auth');
	User.findByToken(token)
		.then((user) => {
			if (!user) {
				return Promise.reject();
			}
			req.user = user;
			req.token = token;
			next();
		})
		.catch((err) => {
			res.status(401).send(err);
		});
};
module.exports = {
	authToken
};
