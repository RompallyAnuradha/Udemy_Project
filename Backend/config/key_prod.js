require("dotenv").config()
console.log(process.env.MONGO_URI)


module.exports = {
    mongoURI : process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY,
    nodemailer : {
        email : process.env.NODE_MAILER_EMAIL,
        password : process.env.NODE_MAILER_PASSWORD
    },
    cloudinary :{
        cloudname :process.env.CLOUDINARY_CLOUD_NAME,
        apiKey : process.env.CLOUDINARY_API_KEY,
        apiSecret : process.env.CLOUDINARY_API_SECRET
    }
}