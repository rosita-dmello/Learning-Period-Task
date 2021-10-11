const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const authRoutes = require("./routes/authRoutes");
const {requireAuth, checkUser} = require("./middleware/authMiddleware");
const User = require("./models/User");

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// database connection
const dbURI = 'mongodb+srv://rosita:test123@cluster0.1b23i.mongodb.net/streaming-site';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/truesic"
  },
  async function(accessToken, refreshToken, profile, done) {
    console.log("Random string");
    try
   {await User.findOne(
            { email: profile.emails[0].value },
            async (err, user) => {
              if (err) {
                console.log(err);
                return done(err);
              }
              if (!user) {
                const newUser = new User({
                  googleId: profile.id,
                  email: profile.emails[0].value,
                  name: profile.displayName,
                });
                await newUser.save();
                console.log(newUser);
                return done(err, newUser);
              }
              console.log("User exists");
              return done(err, user)
  }
)} 
catch(err) {
  console.log(err);
}
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
      await User.findById(id, (err, user) => {
        done(err, user);
      });
    } catch (err) {
      console.log(err);
    }
  });


// Routes
app.use(authRoutes);
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/truesic', 
//  (req,res) => {
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }), (req,res) => {
     try {
      console.log(req.user);
      res.redirect("http://localhost:3000/");
    } catch(err) {
      console.log(err);
    }}
    
    
 );
  // function(req, res) {
  //   console.log("Callback String");
  //   // Successful authentication, redirect home.
  //   // res.redirect('http://localhost:3000/'); // full path
  // });
app.get("*", checkUser);





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});