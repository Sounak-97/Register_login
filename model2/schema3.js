const mongoose = require('mongoose')
const req = require('./schema2')
const OrderHistorySchema = new mongoose.Schema({
    userEmail:
    {
        type:String,
        required: true,
    },
    productID:
        [{ type: mongoose.Schema.Types.ObjectId , ref: 'Products'}],
    price:
    {
        type: Number,
        required: true,
    },
    createdAt:
    {
        type:Date,
        required: true,
        default: Date.now
    }
})
const OrderHistory = mongoose.model('OrderHistory',OrderHistorySchema)
module.exports = OrderHistory
