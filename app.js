require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection
mongoose.connect('mongodb://localhost/flight-attendant')
  .then(() => {
    console.log('   ===============================  ')
    console.log('   CONNECTION TO MONGO ESTABLISHED  ')
    console.log('   ===============================  ')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })


const indexRouter = require('./routes/food');
const usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})



app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
