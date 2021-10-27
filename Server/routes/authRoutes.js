const {Router} = require("express");
const authController = require("../controllers/authController")
const router = Router();
const passport = require('passport');
const jwtConfig = require("../config/jwtConfig") ;
const {requireAuth, checkUser} = require("../middleware/authMiddleware");


router.post("/signup", authController.signup_post, jwtConfig.storeToken);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.get("/auth/google", authController.oauthlogin);
router.get("/auth/google/trusic", authController.callback, jwtConfig.storeToken);



module.exports = router;