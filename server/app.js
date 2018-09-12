const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');

const { mongodb } = require('./models/db/mongodb');
const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const userRouter = require('./routes/user');
const sellerRouter = require('./routes/seller');

const app = express();

dotenv.load({ path: '.env.development' });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

//setup my api router
app.use('/api', indexRouter);
app.use('/api/account', accountRouter);
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);

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
	res.json({ err });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`server listen at : ${PORT}`);
});
module.exports = app;
