const mongoose = require('mongoose')
const req = require('./schema1')
const ProductsSchema = new mongoose.Schema({
    categoryID:
        [{ type: mongoose.Schema.Types.ObjectId , ref: 'Categories'}],
    name:
    {
        type:String,
        required: true,
        unique: true
    },
    price:
    {
        type: Number,
        required: true,
        min:1
    },
    isActive:
    {
        type:Boolean,
        required: true,
    },
    createdAt:
    {
        type:Date,
        required: true,
        default: Date.now
    }
})
const Products = mongoose.model('Products',ProductsSchema)
module.exports=Products