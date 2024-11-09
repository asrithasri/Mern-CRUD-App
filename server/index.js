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
app.get('/getUser/:/id',(req,res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email:req.body.email, 
        age:req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("Server is Running ")
})