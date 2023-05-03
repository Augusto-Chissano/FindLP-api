const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/user");
const db = require("./database/db");
const PORT = 3333;

db();

app.use(express.json());

app.use(cors({
    origin: "*"
}
));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
    res.send("Welcome to FindLP");
})
app.use(router);

//Database connection and server...
db().then(() => {
    app.listen(PORT, () => console.log("Server is running!"));
}).catch((err) => {
    console.log("Ocorreu um erro: " + err);
});

