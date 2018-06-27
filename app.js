const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('./models/User');
require('./models/Food');
require('./models/Mood');
// require('dotenv').config();



mongoose.connect('mongodb://localhost/flight-attendant')
  .then(() => {
    console.log('   ===============================  ')
    console.log('   CONNECTION TO MONGO ESTABLISHED  ')
    console.log('   ===============================  ')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

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


const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('listening!'));
module.exports = app;
