const mongoose = require('mongoose');
const userSchema = require('../db/schemas/userSchema')
const User = mongoose.model('User', userSchema)

module.exports= User

//test