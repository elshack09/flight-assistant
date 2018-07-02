
// require mongoose
const mongoose = require('mongoose');
//create food schema
const foodSchema = require('../db/schemas/foodSchema');
const Food = mongoose.model('food', foodSchema);


//export food
module.exports = Food 