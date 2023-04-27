const router = require("express").Router();
const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("Users");


router.post("/user", async (req, res) => {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password
        }
        const username = req.body.username
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).send({ existingUser: "Usuario ja cadastrado, tente outro!" });
        } else {
            await User.create(newUser);
            return res.status(201).json(newUser);
        }
    } catch (err) {
        return res.status(500).send({ msg: err });
    }
});


router.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });

        return res.status(200).json(user);
    } catch (err) {
        return res.status(404).send({ msg: "Não foi possível obter dados!" });
    }
});


router.get("/user", async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (err) {
        return res.status(404).send({ msg: "Não foi possível obter dados!" });
    }
});


router.put("/user/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const user = await User.findOne({ _id: id })

        user.username = req.body.username;
        user.password = req.body.password;

        await user.updateOne(user);
        await user.save();
        return res.status(200).json(user)

    } catch (err) {
        return res.status(400).send({ msg: 'Não foi possível editar os dados' });
    }
});


router.delete("/user/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const user = await User.findOne({ _id: id })

        user.status = false;

        await user.updateOne(user);
        await user.save();
        res.status(200).json(user)

    } catch (err) {
        return res.status(400).send({ msg: 'Não foi possível eliminar o user' });
    }
});


module.exports = router;