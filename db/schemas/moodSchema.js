const mongoose = require('mongoose').Schema
const {Schema} =mongoose;
const moodSchema = new Schema({
    imageMood: String,
    mood: String
});




module.exports = moodSchema;