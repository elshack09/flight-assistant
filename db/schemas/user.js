const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    seatNumber: { type: String, required: true },
    flightNumber: { type: Number, required: true }
});




// add Google Api Oauth as bonus later
module.exports = mongoose.model('User', userSchema);