const mongoose = require("mongoose")

const User = mongoose.model("Users", {

    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { Date },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }
    ]

});

module.exports = User;