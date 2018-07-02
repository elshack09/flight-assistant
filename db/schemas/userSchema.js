const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id:String,
  name: String,
  email: String,
  seatNumber: String,
  flightNumber: Number
});


module.exports = userSchema;