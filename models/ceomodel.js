const mongoose = require('mongoose')


const ceoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('user', ceoSchema)