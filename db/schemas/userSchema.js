const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  seatNumber: String,
  flightNumber: Number
});


module.exports = userSchema;