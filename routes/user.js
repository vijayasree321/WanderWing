const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

//sign-up
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signUp));

//login
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

//logout
router.get("/logout", userController.logout);

module.exports = router;
