const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        total: {
            type: Number,
            required: true
        },
        orders: [
            {
                id: Number,
                quantity: Number,
                cost: Number,
                cd: Boolean,
                question: Boolean,
                terms: String,
                neededTerms: [String]
            }
        ],
        schoolInfo: {
            name: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamp: true
    }
)

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;