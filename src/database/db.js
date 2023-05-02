const mongoose = require("mongoose");

//
//const user = "augustochissano";
//const pass = encodeURIComponent("488688Guto");
//Localhost
const db = () => mongoose.connect("mongodb://localhost/findlp");
//Cloud
//const db = () => mongoose.connect(`mongodb+srv://${user}:${pass}@findlp.uik7ii3.mongodb.net/?retryWrites=true&w=majority`);

module.exports = db;
