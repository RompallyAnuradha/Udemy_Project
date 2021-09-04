const {USERS} = require('../models')
const bcrypt = require('bcryptjs')
const {validateRegisterInput , validationLoginInput} = require('../validation/auth')
const jwt = require('jsonwebtoken')
const {keys} = require('../config')

exports.register = async (req,res) =>{
    console.log("re" , req.body)
    const {errors , isValid} = validateRegisterInput(req.body)

    // checking for validation
    if(!isValid) return res.status(400).json(errors)
    

    let {username , email , password} = req.body; 

    email = email.toLowerCase()

    try{
       
        const getUser = await USERS.findOne({email : email})
        
        if(getUser){
            return res.status(409).json({error : "Account with this email already exists"})
        }else{
            // const img = generateAvatar()
            const newUser = new USERS({
                username,
                email,
                password,
               
            })

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(newUser.password , salt)

            newUser.password = hash 
            try{
                const savedUser = await newUser.save()
                /// send email 
                // sendemail(newUser.email)
                
                res.status(200).json({message: "Welcome aboard !", user : savedUser})

            }catch(error){
                console.log(error)
                return res.status(400).json({error})
            }
        }


    
    }catch(error){
        console.log(error)
        return res.status(400).json({error})
    }

}


exports.login = async (req,res)=>{
    //validation 
    const {errors , isValid} = validationLoginInput(req.body)

    if(!isValid) return res.status(400).json(errors)

    let {email , password} = req.body

    email = email.toLowerCase();
    
    //check if users exists
    try{
        // Find User by email 
        const getUser = await USERS.findOne({email : email})

        //Check for user 
        if(!getUser) return res.status(404).json({error : "Account with email does not exists"})

        try{
            //match password
            const isMatch = await bcrypt.compare(password , getUser.password)

            if(isMatch){
                 // generate token
                const payload = {
                    username : getUser.username,
                    email : getUser.email,
                    role : getUser.role,
                    imageUrl : getUser.image,
                    _id:getUser._id
                }

                //Create a JWT payload 
                // Sign Token 
                jwt.sign(payload , keys.secretOrKey , {expiresIn : 3600 }, (err, token) =>{
                    res.json({
                        success: true,
                        token : `Bearer ${token}`,
                        user : payload
                    })
                })

            }else{
                return res.status(400).json({message : "Incorrect Password"})
            }

        }catch(error){
            console.log(error)
            return res.status(400).json({error})
        }

    }catch(error){
        console.log(error)
        return res.status(400).json({error})
    }
}

exports.getUser=async (req,res)=>{
    console.log("req" ,req.user)
    const userId = req.user._id
    try {
        const userData = await USERS.findOne({ _id: userId })
        return res.status(200).json( userData )
 
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error })
    }


}