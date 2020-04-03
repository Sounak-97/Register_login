const express = require('express')
const app = express()
app.use(express.json())
require('./model2/database2') //database calling from server
const appuse = require('./model2/api2')
app.use(appuse)
//require('dotenv').config()
//PORT=process.env.port
app.listen(3005)
console.log("server is running")