const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("", require("./src/routes/crudRouting"));

app.use("", require("./src/routes/authRouting"));

module.exports = app;
