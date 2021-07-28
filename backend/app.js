const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('', require('./src/routes/crudRouting'))


app.use(cors());


module.exports = app;
