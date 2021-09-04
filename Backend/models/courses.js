const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    author:{
        type:String
    },
    Enrolled:{
        type:String
    },
    learn1:{
        type:String
    },
    learn2:{
        type:String
    },
    learn3:{
        type:String
    },
    learn4:{
        type:String
    },
    learn5:{
        type:String
    },
    courses:{
        type:String
    },
    img:{
        type:String
    }
}) 
const COURSES =mongoose.model('COURSES',coursesSchema)
module.exports=COURSES