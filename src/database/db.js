const mongoose = require("mongoose");


/*
// 1-Cloud database config
const user = "augustochissano";
const pass = encodeURIComponent("488688Guto");

const db = () => mongoose.connect(`mongodb+srv://${user}:${pass}@findlp.uik7ii3.mongodb.net/?retryWrites=true&w=majority`);
*/

// 2-Localhost databse
const db = () => mongoose.connect("mongodb://localhost/findlp").then(() => {
    console.log('Conectado ao database!')
})

module.exports = db;
