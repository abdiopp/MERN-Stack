const asyncHandler = require('express-async-handler')

// Get Goals
// GET/api/todos
// private
const getTodos = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.json({ message: 'Get Todos' })
})
// set Goals
// POST/api/todos
// private
const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text')
    }
    res.json({ message: 'set Todos' })
})
// Update Goals
// PUT/api/todos/id
// private
const updateTodo = asyncHandler(async (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})
// Delete Goals
// DELETE/api/todos/id
// private
const deleteTodo = asyncHandler(async (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}