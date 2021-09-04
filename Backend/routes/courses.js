const express = require('express')
const router = express.Router()
const {COURSES}  = require('../models')
const fs = require('fs')
const {upload} = require('../config/multerconfig')
const {cloudinary} = require('../config/keys')

// get all arestaurant

router.get('/' ,(req,res)=>{
    COURSES.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).send(err))
})

const controller = (req,res ,next)=>{
    console.log(req.file)
    console.log(req.body)
    cloudinary.uploader.upload(req.file.path , {public_id : `courses/${req.file.filename}`})
    .then((result) => {
       const obj = {
        name : req.body.name,
        price : req.body.price,
        description:req.body.description,
        author:req.body.author,
        Enrolled:req.body.Enrolled,
        learn1:req.body.learn1,
        learn2:req.body.learn2,
        learn3:req.body.learn3,
        learn4:req.body.learn4,
        learn5:req.body.learn5,
        courses:req.body.courses,
        img: result.secure_url
       }
       COURSES.create(obj)
       .then((data)=> {
            fs.unlinkSync(req.file.path)
            res.status(200).json(data)
       })
       .catch((err) => res.status(400).send(err))
    })
    .catch((err) => res.status(400).send(err))
    
}


router.post('/',upload.single('img') , controller ) 






router.get('/:id' ,(req,res)=>{
    const rId = req.params.id
    COURSES.findOne({_id : rId})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).send(err))
})



router.put('/:id', upload.single('img') ,(req,res)=>{
    const rId = req.params.id
    console.log("rid" , rId)
    console.log(req.file)
    if(req.file){
        cloudinary.uploader.upload(req.file.path ,  {public_id : `courses/${req.file.filename}`})
        .then((result)=>{
            console.log("res" ,result)
            const newBody = {
                name : req.body.name,
                price : req.body.price,
                description:req.body.description,
                author:req.body.author,
                Enrolled:req.body.Enrolled,
                learn1:req.body.learn1,
                learn2:req.body.learn2,
                learn3:req.body.learn3,
                learn4:req.body.learn4,
                learn5:req.body.learn5,
                courses:req.body.courses,
                img: result.secure_url
            }
            COURSES.findOneAndUpdate({_id : rId} ,newBody)
            .then((data)=>{
                console.log("done")
               /*  fs.unlinkSync(req.file.path) */
                res.status(200).json(data)
            })
            .catch((err) => res.status(400).send(err))
        })
    }else{
        COURSES.findOneAndUpdate({_id : rId}, req.body)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).send(err))
    }
})


router.delete('/:id' ,(req,res)=>{
    const rId = req.params.id
    COURSES.findOneAndDelete({_id : rId})
    .then(() => res.status(200).send("Restaurant Deleted"))
    .catch((err) => res.status(400).send(err))
})


module.exports = router