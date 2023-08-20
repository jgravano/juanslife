var express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const errorHandler = require('./src/middlewares/errorMiddleware');
require('dotenv').config();

var app = express();
connectDB();

app.use(express.json());
app.use('/user', userRoutes);
app.use(itemRoutes);
app.use(errorHandler);

module.exports = app;