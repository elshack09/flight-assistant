const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    food: { type: String, required: true }, 
    snack: { type: String, required: true }, 
    drink: { type: String, required: true } 
});




module.exports = mongoose.model('Food', foodSchema);