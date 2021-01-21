"use strict";

// const path =require('path');
var express = require('express');

var dotenv = require('dotenv');

var morgan = require('morgan');

var _require = require('./middleware/errorMiddleware.js'),
    notFound = _require.notFound,
    errorHandler = _require.errorHandler;

var connectDB = require('./config/db');

var resturantRoutes = require('./routes/resturantRoutes.js');

var userRoutes = require('./routes/userRoutes.js');

dotenv.config();
connectDB();
var app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/resturant', resturantRoutes);
app.use('/api/users', userRoutes); //Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// }

if (process.env.NODE_ENV === 'production') {
  //   //Set static folder
  app.use(express["static"]('client/build'));
  app.get('*', function (req, res) {
    return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', function (req, res) {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);
var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server running in ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT)));