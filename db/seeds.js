require("dotenv").config();
const User = require("../models/Users");
const Food = require("../models/Food");
const Mood = require("../models/Users");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo!");
});

mongoose.connection.on("error", error => {
  console.error(`Mongo DB connection error: ${error}`);
  process.exit(-1);
});

User.remove({})
  .then(() => {
    const users = new User({
      name: "Andrea Smith",
      email: "andreasmith@gmail.com",
      seatNumber: "12B",
      flightNumber: 2703
    });
    const foods = new Food({
      food: "Spaghetti",
      snack: "Fruit Cup",
      drink: "Orange Juice"
    });
    const moods = new Mood({
      imageMood: "https://crazyyetwise.files.wordpress.com/2011/01/happy.jpg",
      mood: "Happy!"
    });
    return users.save()

  })
  .catch(error => {
    console.log("!!!!! ERROR SAVING SEEDED DATA !!!!!");
    console.log(error);
  })
  .then(() => {
    mongoose.connection.close();
    console.log(`
        Finished seeding database...
        
        Disconnected from MongoDB
      `);
  });
