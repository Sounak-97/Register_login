const express = require('express')
const router = express.Router()
const user1 = require('./schema1')
const user2 = require('./schema2')
const user3 = require('./schema3')
const validator = require('validator')
router.post('/CatCreate',async(req,res)=>{
    try{
        const data = req.body
        const post = await data.save()
        res.send(post)
        res.status(200).send('Inserted Successfully into categories')
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/ProCreate', async(req,res)=>{
    try{
        const data = req.body
        const post = await data.save()
        res.send(post)
        res.status(200).send('Inserted successfully into Products')
    }catch(e){
        res.status(400).send(e)
    }
})
router.post('/OHCreate', async(req,res)=>{
    try{
        const data = new user3(req.body)
        const mail = req.body.Email
        if(validator.isEmail(mail)){
            await data.save()
            res.send(data)
            res.status(200).send('Inserted successfully into Products')
        }
        else{
            res.status(400).send('Invalid Email')
        }
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/:id', async(req,res)=>{
    try{
        const re = /duct$/
        const re2 = /duct2$/
        _id = req.params.id
    
        if(re.test(_id)){
            const read = await user2.find({}).populate('Categories')
            res.status(200).send(read)
        }
        else if(re2.test(_id)){
            const read = await user2.find({}).populate('Categories')
            res.status(200).send(read)
        }
        else{
            res.status(404).send('Wrong entry')
        }

    }catch(e)
    {
        res.status(400).send('Invalid')
    }
})
module.exports=router