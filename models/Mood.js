const mongoose = require('mongoose');
const moodSchema = require('../db/schemas/moodSchema');
const Mood = mongoose.model('Mood', moodSchema);

module.exports = Mood 