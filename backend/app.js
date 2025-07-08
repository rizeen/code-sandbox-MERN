var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var appRoot = require("app-root-path");

var indexRouter = require(appRoot + "/routes/index");
var usersRouter = require(appRoot + "/routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(appRoot + "/frontend"));

app.use("/", indexRouter);
app.use("/users", usersRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
