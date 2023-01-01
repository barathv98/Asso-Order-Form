const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
    }
    catch(error) {
    }
}

module.exports = connectDB;