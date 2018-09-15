const router = require('express').Router();
const { authToken, authSeller } = require('./../middleware/authantification');
const Product = require('./../models/Product');
const Category = require('./../models/Category');

router.post('/category', authToken, authSeller, (req, res) => {
	new Category({
		name: req.body.name,
		created: new Date()
	})
		.save()
		.then((category) => {
			res.send({ category });
		})
		.catch((err) => {
			res.status(422).json({
				message: err.errmsg || err.message || 'validation error'
			});
		});
});
router.post('/product', authToken, authSeller, (req, res) => {
	new Product({
		title: req.body.title,
		owner: req.user._id,
		category: req.body.category,
		image: req.body.image,
		description: req.body.description,
		quantity: parseInt(req.body.quantity || 1),
		price: parseFloat(req.body.price),
		created: new Date()
	})
		.save()
		.then((product) => {
			res.json(product);
		})
		.catch((err) => {
			res.status(422).json({
				message: err.errmsg || err.message || 'validation error'
			});
		});
});

router.get('/products', authToken, authSeller, async (req, res) => {
	try {
		const products = await Product.find({ owner: req.user._id });
		res.json({
			products
		});
	} catch (err) {
		res.status(422).json({
			message: err.errmsg || err.message || 'validation error'
		});
	}
});

router.get('/products');

module.exports = router;
