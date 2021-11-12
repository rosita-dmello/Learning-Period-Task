const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Cookies = require("js-cookie");


const requireAuth =  async (req, res, next) => {
    const token = req.cookies.jwt;
    const jwtCookie = Cookies.get('jwt');
    console.log(token);
    
     if(token){
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if(err){
                console.log(err.message);
                
            } else {
                console.log(decodedToken);
                next();
            }
        })

     } else {
         res.redirect("/login");
     }
}

// Check current user

const checkUser = () => async (req, res, next) => {
    console.log(req.cookies.jwt);
    if(token){
        jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })

     } else {
         res.locals.user = null;
                next();
     }

}
module.exports = {requireAuth, checkUser};