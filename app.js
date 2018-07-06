require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

// requiring routes
const food = require("./routes/api/food");
const users = require("./routes/api/users");
const mood = require("./routes/api/mood");

//test
// intializing the app
const app = express();

app.use(express.static(`${__dirname}/client/build`));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Routes
app.use("/api/users", users);
app.use("/api/food", food);
app.use("/api/mood", mood);

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
