const mongoose = require('mongoose')

const MONGO_URI = "mongodb+srv://barathkumarv:barathv98@cluster0.04ak9vp.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("connected")
    }
    catch(error) {
        console.log("error connecting db ", error)
    }
}

module.exports = connectDB;