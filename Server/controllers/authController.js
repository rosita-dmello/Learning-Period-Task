const User = require("../models/User");
const jwt = require('jsonwebtoken');
const passport = require("passport");
const {createToken, maxAge} = require("../config/jwtConfig") 

// controller actions

module.exports.signup_post = async (req, res) => {
  const { name, phone, email, password } = req.body;
    try {
    const user = await User.create({ name, phone, email, password });
    const token = await createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
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
    res.status(200).json({user: user._id});
    }
    else if (user.googleId) {
      res.redirect("http://localhost:3001/auth/google")
    }
    
  }
  catch (err){
    console.log(err);
    res.status(400).json({err});
  }
}

module.exports.logout_get = (req,res) => {
  res.cookie("jwt", "", {maxAge: 1});
  res.redirect("http://localhost:3000/");
}

module.exports.oauthlogin = passport.authenticate('google', {
  scope: ['profile', 'email']
});

module.exports.callback =passport.authenticate('google');
