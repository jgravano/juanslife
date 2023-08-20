var createError = require('http-errors');
var express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middlewares/errorMiddleware');
require('dotenv').config();

var app = express();
connectDB();

app.use(express.json());
app.use('/user', userRoutes);
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
