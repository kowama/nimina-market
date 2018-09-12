const router = require('express').Router();
const { authToken } = require('./../middleware/authantification');
const Product = require('./../models/Product');
const Category = require('./../models/Category');

router.post('/category', authToken, async (req, res) => {
	new Category({
		name: req.body.name,
		created: new Date()
	})
		.save()
		.then((category) => {
			res.send(category);
		})
		.catch((err) => {
			res.status(402).json({
				message: err.errmsg || err.message || 'validation error'
			});
		});
});
router.post('/product', authToken, (req, res) => {
	new Product({
		title: req.body.title,
		owner: req.user._id,
		category: req.body.category, //
		image: req.body.image, //
		description: req.body.description,
		price: req.body.price,
		created: new Date()
	});
});

router.get('/products');

module.exports = router;
