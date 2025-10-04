const User=require("../Models/user");
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup");
};
module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const reguser = await User.register(newUser, password);
    console.log(reguser);
    req.login(reguser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to WanderWing!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login");
};
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to WanderWing!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
module.exports.logout=(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    req.flash("success","You are logged out");
    res.redirect("/listings");
  })
}