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

 
 
App.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json (users))
    .catch(err => res.json(err))
})
App.listen(3001,()=>{
    console.log('server is running on port 3001')
})