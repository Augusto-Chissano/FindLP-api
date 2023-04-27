const mongoose = require("mongoose");

const User = mongoose.model("Users", {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    posts: Array,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});

module.exports = User;