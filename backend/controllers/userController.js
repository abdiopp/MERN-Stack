// Register new user
// POST/api/users
// Public
const registerUser = (req, res) => {
    res.json({ message: 'Register user' })
}
// Login user
// POST/api/login
// Public
const loginUser = (req, res) => {
    res.json({ message: 'Login user' })
}
// Register new user
// GET/api/users/me
// Public
const getMe = (req, res) => {
    res.json({ message: 'Get user Data' })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}