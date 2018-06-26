const mongoose = require('mongoose');
const userSchema = require('../db/schemas/user')
const User = mongoose.model('User')

module.exports= User