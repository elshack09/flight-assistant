const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
    food: String,
    snack: String,
    drink: String
});




module.exports = foodSchema;