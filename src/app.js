const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const db = require('./database/db')


const PORT = 3333;
const app = express();

app.use(cors());

app.use('/uploads', express.static('src/uploads')); //Rota para imagens
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to FindLP</h1>");
})

app.use(userRouter);
app.use(postRouter);

//Database connection and server...
db().then(() => {
    app.listen(PORT, () => console.log("Server is running!"));
}).catch((err) => {
    console.log("Ocorreu um erro: " + err);
});

