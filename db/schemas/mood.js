const mongoose = require('mongoose');
const { Schema } = mongoose;

const moodSchema = new Schema({
    imageMood: { type: String, required: true },
    mood: { type: String, required: true }
});




module.exports = mongoose.model('Mood', moodSchema);