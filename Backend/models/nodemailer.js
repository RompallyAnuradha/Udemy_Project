const mongoose =require('mongoose')

const nodemailerSchema = new mongoose.Schema({
    username :  {
        type : String , 
        required : true
    },
    email : {
        type : String 
    },
    password : {
        type : String
    }
})

const NODEMAILER = mongoose.model('NODEMAILER',nodemailerSchema)
module.exports=NODEMAILER