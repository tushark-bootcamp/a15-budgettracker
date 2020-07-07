const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//const PORT = 3000;
var PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget",
  { useNewUrlParser: true }
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});