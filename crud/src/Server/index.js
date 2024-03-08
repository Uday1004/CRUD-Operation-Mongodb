const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./model/Users')

const App = express()
App.use(cors())
App.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});


App.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
    })


App.get('/', (req, res) =>{
UserModel.find({})
.then(users => res.json(users))
.catch(err => res.json(err))
})
 
App.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json (users))
    .catch(err => res.json(err))
})

App.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then (res => res.json(res))
    .catch(err => res.json(err))
    })

App.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age})
    .then(users => res.json (users))
    .catch(err => res.json(err))
    })
App.listen(3001,()=>{
    console.log('server is running on port 3001')
})