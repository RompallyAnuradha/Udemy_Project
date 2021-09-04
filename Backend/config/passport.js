const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys')
const  USERS = require('../models/users')

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;


module.exports = passport => { 
    passport.use(
        new JwtStrategy(
            opts,
            async (jwt_payload , done) =>{
                console.log("jw" , jwt_payload)
                try {
                    const gotUser = await USERS.findOne({_id : jwt_payload._id})
                    console.log("in pa" , gotUser)
                    if(gotUser) return done(null , gotUser)

                    return done(null , false)
                }catch(error){
                    console.log(error)
                }
            }
        )
    )
}