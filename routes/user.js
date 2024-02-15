const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.renderSignupForm) //Get signup route
.post(wrapAsync (userController.signUp)); //Post signup route

router.route("/login")
.get(userController.renderLoginForm) //Get login route
.post(saveRedirectUrl,passport.authenticate("local",{ failureRedirect : "/login", failureFlash : true}),userController.logIn); //Post login route

//Get logout route
router.get("/logout",userController.logOut);


module.exports = router;

