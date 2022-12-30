const express = require("express");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/orderRoute");
const connectDB = require("./config/db")

const app = express();
connectDB();
app.use(express.json());
app.set('view engine', 'ejs');

app.use('/api/confirm-order', orderRoutes);

dotenv.config();
app.listen(5000, console.log("connected to server"));