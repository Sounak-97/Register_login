var bcrypt = require('bcryptjs');
const express = require('express')
const route =express.Router()
const User = require('./schema')
const otp = require('./otp')
const verifyMail = require('./nodemailer')
route.post('/',async(req,res)=>
{   
    try{
        let data = new User(req.body)
        data.password= await bcrypt.hash(data.password, 8)
         const ot = otp()
         console.log(ot)
        //verifyMail(email,ot)
        await data.save()
        res.send(data)
        res.status(200).send("insert succesful")
    }catch (e)
    {
        res.status(404).send(e)
    }
})
route.post('/login',async function (req, res, next) { 
    try{
        var email = await req.body.email;
        var password = await req.body.password;
        var usr= await User.findOne({email});
        if(!usr){
            res.status(400).send('Invalid User')
        }
        else{
            const token = await usr.generateToken()
            if(bcrypt.compare(password,usr.password)){

                res.status(200).send({usr , token})
            }
            else{
                res.status(400).send('invalid user')
            }
        }
    }catch(e){
        res.status(500).send(e)
    }
})
route.get('/',async(req,res)=>
{
    try{
        const read = await User.find({})
        //await bcrypt.compareSync(read.password, hash);
        res.send(read)
        res.status(200).send("success")
    }catch (e)
    {
        res.status(500).send("not found the data")
    }
})
route.delete('/api/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove({ _id: req.params.id }, function (err, result) {
            err ? res.status(400).send(err) : res.send('User deleted!')
        })
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports=route