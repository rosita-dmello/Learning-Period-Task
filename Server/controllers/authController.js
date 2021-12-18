const User = require("../models/User");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const {createToken, maxAge} = require("../config/jwtConfig") 

// controller actions

module.exports.signup_post = async (req, res) => {
  const { name, phone, email, password } = req.body;
  const role = "user";
    try {
    const user = await User.create({ name, phone, email, password, role });
    const token = await createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user, token});
    } catch(err) {
      console.log(err);
    }
}
module.exports.artistSignup_post = async (req, res) => {
  const { name, phone, email, password } = req.body;
  const role = "artist";
    try {
    const user = await User.create({ name, phone, email, password, role});
    const token = await createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user, token});
    } catch(err) {
      console.log(err);
    }
}
module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if(user.password) {
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user, token});
    }
    else if (user.googleId) {
      res.json({message: "Use Google sign in"});
    }
    else {
      res.json({user});
    }
    
  }
  catch (err){
    console.log(err);
    res.status(400).json({err});
  }
}
module.exports.artistLogin_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if(user.password && user.role === "artist") {
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user, token});
    }
    else if(user.password && user.role !== "artist") {
      res.json({message: "Not an artist"});
    }
    else {
      res.json({user});
    }
    
  }
  catch (err){
    console.log(err);
    res.status(400).json({err});
  }
}

module.exports.logout_get = (req,res) => {
  res.cookie("jwt", "", {maxAge: 1});
  res.json({message: "Logged out"});
  
  // res.redirect("http://localhost:3000/");
}

module.exports.oauthlogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports.callback = passport.authenticate("google", {
  successRedirect: "http://localhost:5000/displaySongs",
  failureRedirect: "http://localhost:5000/login"
});
