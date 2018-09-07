const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const dotenv = require('dotenv');

const { mongodb } = require('./models/db/mongodb');

const app = express();

dotenv.load({ path: '.env.development' });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }
	})
);

app.get('/', (req, res) => {
	res.json({
		message: 'hello world !'
	});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server listen at : ${PORT}`);
});
module.exports = app;
