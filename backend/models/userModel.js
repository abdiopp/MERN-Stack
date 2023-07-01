const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add userName']
    },
    email: {
        type: String,
        required: [true, 'please add Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add [asswprd]']
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('User', userScheme)