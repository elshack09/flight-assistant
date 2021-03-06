const express = require("express");
const router = express.Router();
const Users = require("../../models/Users");

// GET request
// Show users api/users/login
router.get("/guests", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
      console.log(users);
    })
    .catch(err => console.log(err));
});
//Get request
//Show a user
router.get("/guests/:id", (req, res) => {
  Users.findByIdAndUpdate(req.params.id)
    .then(users => {
      res.json(users);
      console.log(users);
    })
    .catch(err => console.log(err));
});
// Put
  // Update user data
  router.put("/guests/:id", (req, res) => {
    const users = {
      name: req.body.name,
      email: req.body.email,
      seatNumber: req.body.seatNumber,
      flightNumber: req.body.flightNumber
    };
    Users
    .findByIdAndUpdate(req.params.id, { $set: users }, { new: true }).then(
      users => res.json(users).catch((err = console.log(err)))
    );
  });
//Delete request
//Delete a user
router.delete("/guests/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id)
    .then(users => {
      res.json(users);
      console.log(users);
    })
    .catch(err => console.log(err));
});
// Post request
// Create new user data
router.post("/guests", (req, res) => {
  Users.findOne({ email: req.body.email }).then(users => {
    if (users) {
      return res.status(400).json({ email: "email account already created" });
    } else {
      const newUsers = new Users({
        name: req.body.name,
        email: req.body.email,
        seatNumber: req.body.seatNumber,
        flightNumber: req.body.flightNumber
      });
      newUsers
        .save()
        .then(users => res.json(users))
        .catch(err => console.log(err));
    }
  });  
  //test
});

module.exports = router;
