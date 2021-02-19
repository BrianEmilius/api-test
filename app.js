require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");

require("./config/database");
app.use(cors());

require("./routes/User.route")(app);

module.exports = app;
