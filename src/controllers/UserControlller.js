const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("Users");



const getUsers = async (req, res) => {

    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (err) {
        return res.status(404).send({ msg: "Não foi possível obter dados!" });
    }
}



module.exports = { getUsers };