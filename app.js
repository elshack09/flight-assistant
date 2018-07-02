require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose Connected!");
});

connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});


// requiring routes 
const food = require('./routes/api/food');
const users = require('./routes/api/users');

const mood = require('./routes/api/mood')


// intializing the app
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + "/client/build/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//Index
app.get('/', (req,res) => res.send('Hello Erica'));

// Routes
app.use('/api/users', users);
app.use('/api/food', food);
app.use('/api/mood', mood);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


module.exports = app;
