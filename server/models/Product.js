const mongoose = require('mongoose');
const { mongodb } = require('./db/mongodb');

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	image: {
		type: String
	},
	description: {
		type: String
	},
	price: {
		type: Number
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
