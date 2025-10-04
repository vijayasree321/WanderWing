const express=require("express");
const Router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {validateReview,isLoggedIn, isReviewAuthor} =require("../middleware");
const reviewController=require("../controllers/reviews");
//Reviews
//Post review route
Router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.createReview));
//Delete review route
Router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));
module.exports=Router;