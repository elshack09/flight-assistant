const mongoose = require('mongoose');
const moodSchema = require('../db/schemas/mood');
const Mood = mongoose.model('Mood');

module.exports = Mood 