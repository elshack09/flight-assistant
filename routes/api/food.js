const express = require('express');
const router = express.Router();
const { Food } = require('../../models/Users');


// GET request to api/food/test
router.get('/', (req, res) => res.json({ msg: 'food Work' }));



// GET request
// Show users api/users/login
router.get("/food", (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
        console.log(users);
      })
      .catch(err => console.log(err));
  });
  





module.exports = router;