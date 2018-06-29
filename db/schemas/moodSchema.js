const mongoose = require('mongoose');
const { Schema } =mongoose;

const moodSchema = new Schema({
    imageMood: String,
    mood: String
});




module.exports = moodSchema;