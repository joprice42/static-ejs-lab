var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const res = require("express/lib/response");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", function (req, res) {
  res.render("landing.ejs");
});

//create 5 route handlers
//1
app.get("/cat1", function (req, res) {
  res.render("kittykat1.ejs");
});
// //2
app.get("/cat2", function (req, res) {
  res.render("kittykat2.ejs");
});
//3
app.get("/cat3", function (req, res) {
  res.render("kittykat3.ejs");
});
//4
app.get("/cat4", function (req, res) {
  res.render("kittykat4.ejs");
});
//5
app.get("/cat5", function (req, res) {
  res.render("kittykat5.ejs");
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
