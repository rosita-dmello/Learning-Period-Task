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
require('./config/OAuthConfig')(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


// database connection
const dbURI = 'mongodb+srv://rosita:test123@cluster0.1b23i.mongodb.net/streaming-site';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})



// Routes
app.use(authRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});