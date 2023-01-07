const express = require("express");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/orderRoute");
const connectDB = require("./config/db")

dotenv.config()
connectDB();
const app = express();
app.use(express.json());

app.use('/confirm-order', orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("connected to server"));