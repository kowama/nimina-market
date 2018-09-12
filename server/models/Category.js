const mongoose = require('mongoose');
const { mongodb } = require('./db/mongodb');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
