const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
//cors access our server side in our front end
app.use(cors())

//for pass data from frontend to the backend it will format to json format
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/localjost")

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.get('getUser/')

app.post("/createUser",(req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("Server is Running ")
})