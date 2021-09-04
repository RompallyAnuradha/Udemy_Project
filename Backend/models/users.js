const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required: [true , "Name is required"]
    },
    email: {
        type : String,
        required : [true , "Email is required"],
        unique : [true, "Email already exists"],
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ,
            "Please enter a valid email address"
        ]
    },
    password : {
        type: String, 
        minlength:[6 , "your password must be longer than 6 characters"]
    },
    image : String,
    isVerified : {
        type : String,
        default : false
    },
    createdOn : {
        type : Date,
        default : new Date()
    },
    createdBy : String,
    role : {
        type : String,
        default : 'user'
    }

    
})

const USERS = mongoose.model('USERS' , userSchema)

module.exports = USERS