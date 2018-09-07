const mongoose = require('mongoose');
const dotenv = require('dotenv').load({ path: '.env.development' });

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true });

const mongodb = mongoose.connection;
module.exports = {
	mongodb
};
