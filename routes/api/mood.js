const express = require('express');
const router = express.Router();
const { Users } = require('../../models/Users');


// GET request to api/mood/test
// Test mood route
router.get('/mood', (req, res) => res.json({ msg: 'Mood Work' }));






module.exports = router;