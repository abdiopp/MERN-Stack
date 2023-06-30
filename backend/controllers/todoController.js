// Get Goals
// GET/api/todos
// private
const getTodos = (req, res) => {
    res.json({ message: 'Get Todos' })
}
// set Goals
// POST/api/todos
// private
const setTodo = (req, res) => {
    res.json({ message: 'set Todos' })
}
// Update Goals
// PUT/api/todos/id
// private
const updateTodo = (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
}
// Delete Goals
// DELETE/api/todos/id
// private
const deleteTodo = (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
}


module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo
}