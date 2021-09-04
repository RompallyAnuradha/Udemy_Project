const mongoose = require('mongoose')
const {keys} = require('../config')

mongoose.connect('mongodb://localhost:27017/courses' ,
 {useNewUrlParser : "true"})

mongoose.connection.on("connected" , (err,res)=>{
    console.log("Mongodb is connected")
})

mongoose.connection.on("error" , (err,res)=> { 
    console.log('err' ,err)
})


const COURSES = require('./courses')

const USERS =require('./users')

module.exports = {
    COURSES,
    USERS
}