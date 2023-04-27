const mongoose = require("mongoose");

const db = () => mongoose.connect("mongodb://localhost/findlp");

module.exports = db;
