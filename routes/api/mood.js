const express = require('express');
const router = express.Router();
const Mood = require('../../models/mood');

// GET request
// Show moods api/mood
router.get("/", (req, res) => {
    Mood.find().then(moods => {
        res.json(moods);
        console.log(moods);
      })
      .catch(err => console.log(err));
  });

//Get request
//Show a mood
// test
router.get("/mood/:id", (req, res) => {
    Mood.findById(req.params.id)
      .then(moods => {
        res.json(moods);
        console.log(moods);
      })
      .catch(err => console.log(err));
  });
// Put
  // Update mood data
  router.put("/mood/:id", (req, res) => {
    const moods = {
      imageMood: req.body.imageMood,
      mood: req.body.mood
    };
    Moods
    .findByIdAndUpdate(req.params.id, { $set: moods }, { new: true }).then(
      moods => res.json(moods).catch((err = console.log(err)))
    );
  });

module.exports = router;