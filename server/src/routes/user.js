const express=require('express')
const app=express.Router()
const UserController = require('../controller/user')
app.post('/register', UserController.registerNewUser)
app.post('/login', UserController.loginUser)


module.exports=app;