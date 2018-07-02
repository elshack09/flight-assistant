const express = require("express");
const router = express.Router();
// const Food  = require("../../models/Food");

// GET request
// Show foods
router.get("/", (req, res) => {
  Food.find()
    .then(foods => {
      res.json(foods);
      console.log(foods);
    })
    .catch(err => console.log(err));
});

//Get request
//Show a food
router.get("/food/:id", (req, res) => {
  Food.findById(req.params.id)
    .then(foods => {
      res.json(foods);
      console.log(foods);
    })
    .catch(err => console.log(err));
});
// Put
// Update food data
router.put("/food/:id", (req, res) => {
  const foods = {
    food: req.body.food,
    snack: req.body.snack,
    drink: req.body.drink
  };
  Foods.findByIdAndUpdate(req.params.id, { $set: foods }, { new: true }).then(
    foods => res.json(foods).catch((err = console.log(err)))
  );
});

module.exports = router;
