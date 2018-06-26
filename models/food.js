const mongoose = require('mongoose');
const foodSchema = require('../db/schemas/food');
const Food = mongoose.model('Food');

module.exports = Food 