const express = require('express')
const app = express()
app.use(express.json())
require('./model/database') //database calling from server
const appuse = require('./model/api')
app.use(appuse)
app.use('/api/insert',appuse)
app.use('/api/read',appuse)
// app.use('/api/delete/:id',appuse)
//server create
require('dotenv').config()
PORT=process.env.port
app.listen(PORT)
console.log("server is running")