const mongoose = require('mongoose');
const { mongodb } = require('./db/mongodb');

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	image: {
		type: String
	},
	rating: {
		type: Number,
		max: 5,
		min: 0,
		default: 5
	},
	description: {
		type: String
	},
	price: {
		type: Number
	},
	quantity: {
		type: Number,
		required: true,
		default: 1
	},
	quantitySolded: {
		type: Number,
		required: true,
		default: 0
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
