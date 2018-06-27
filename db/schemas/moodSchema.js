const mongoose = require('mongoose').Schema
const {Schema} =mongoose;
const moodSchema = new Schema({
    imagneMood: String,
    mood: String
});




module.exports = moodSchema;