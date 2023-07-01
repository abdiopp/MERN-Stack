const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: String,
    description: String

},
    { timestamps: true }
)

module.exports = mongoose.model('Todo', todoSchema)