const mongoose = require('mongoose')
const CategoriesSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required: true,
        minlength: 3,
        unique: true
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
    },
})
const Categories = mongoose.model('Categories',CategoriesSchema)
module.exports=Categories