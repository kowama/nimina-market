const router = require('express').Router();
const Product = require('../models/Product');
const Category = require('../models/Category');

router.get('/products', async (req, res) => {
	try {
		const products = await Product.find({});
		res.json({
			products
		});
	} catch (err) {
		res.status(422).json({
			message: err.errmsg || err.message || 'validation error'
		});
	}
});

router.get('/categories', async (req, res, next) => {
	try {
		const categories = await Category.find({});
		res.json({
			categories
		});
	} catch (err) {
		res.status(422).json({
			message: err.errmsg || err.message || 'validation error'
		});
	}
});

module.exports = router;
