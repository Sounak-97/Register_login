const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const ModelSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required: true,
        unique:true,
        minlength:3
    },
    password:
    {
        type:String,
        required: true,
        unique:true,
        minlength:3
    },
    email:
    {
        type:String,
        required: true,
        unique:true,
    },
    date:
    {
        type:Date,
        default:Date.now
    },
    otp: Number,
    tokens:[{
        token:{
            type: String
        }
    }]
})
ModelSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, 'xaghty')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
const User = mongoose.model('User',ModelSchema)
module.exports=User