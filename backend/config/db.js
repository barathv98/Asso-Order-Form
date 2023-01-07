const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true)
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("connected to db")
    }
    catch(error) {
        console.log("db error",error.message)
    }
}

module.exports = connectDB;