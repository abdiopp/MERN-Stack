const asyncHandler = require('express-async-handler')

const Todo = require('../models/todoModel')

// Get Todos
// GET/api/todos
// private
const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find()

    res.json(todos)
})
// set Todos
// POST/api/todos
// private
const setTodo = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add title')
    }
    if (!req.body.description) {
        res.status(400)
        throw new Error('Please add description')
    }

    const todo = await Todo.create({
        title: req.body.title,
        description: req.body.description
    })

    res.json(todo)
})
// Update Todo
// PUT/api/todos/id
// private
const updateTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo Not Found')
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.json(updatedTodo)
})
// Delete Todo
// DELETE/api/todos/id
// private
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo Not Found')
    }

    await todo.deleteOne()

    res.json({ id: req.params.id })
})


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}