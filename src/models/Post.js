const mongoose = require('mongoose')

//Criando o model para postagens
const postSchema = mongoose.Schema({

    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    date: { type: Date },
    location: { type: String },
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', 
    }

})

module.exports = mongoose.model('Posts', postSchema)