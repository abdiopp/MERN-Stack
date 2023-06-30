const mongoose = require('mongoose')

// connect to mongoDB

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('database connection error', error)
        process.exit(1)
    }
}

module.exports = connectDB