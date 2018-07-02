require("dotenv").config();
const User = require("../models/users");
const Food = require("../models/food");
const Mood = require("../models/mood");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo!");
});

mongoose.connection.on("error", error => {
  console.error(`Mongo DB connection error: ${error}`);
  process.exit(-1);
});

// user data
User.remove({}).then(() => {
  const users = new User({
    name: "Andrea Smith",
    email: "andreasmith@gmail.com",
    seatNumber: "12B",
    flightNumber: 2703
  });
  return users.save();
});

// food data
Food.remove({}).then(() => {
  const foods = new Food({
    food: "Spaghetti",
    snack: "Fruit Cup",
    drink: "Orange Juice"
  });
  return foods.save();
});

// mood data
Mood.remove({}).then(() => {
    const moods = new Mood({
      imageMood: "https://crazyyetwise.files.wordpress.com/2011/01/happy.jpg",
      mood: "Happy!"
    });
    return moods.save();
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
