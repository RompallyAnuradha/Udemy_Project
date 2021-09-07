const express = require('express');
const router = express.Router();
const {NODEMAILER} =require('../models')
const {smptpTransport} = require('../config/keys')

const body = `<h2>Thanks for Joining</h2>`
/* GET users listing. */
router.get('/', function(req, res) {
        NODEMAILER.find({})
        .then((response) => {
          res.json(response)
        })
        .catch((err)=> {
          console.log(err)
        })
});

//path - /users
// method - post 
// respone 
router.post('/' , (req,res)=>{
  console.log("req" , req.body.username)
  const mailOptions = {
    from : 'team-team@wl-ui-2021',
    to : req.body.email,
    subject : `Welcome to the team ${req.body.username}`,
    html : body
}
  NODEMAILER.create(req.body)
  .then((data) => { 
        smptpTransport.sendMail(mailOptions , (error)=>{
          if(error) {
            console.log(error)
          }else{
          console.log("mail sent")
        }})

        res.json("user created!")

  })
  .catch((err) => console.log(err))
})


module.exports = router;