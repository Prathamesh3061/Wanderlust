const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressEroor = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");



//Reviews
// post review route
router.post("/", 
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));


//Delete  review route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
     wrapAsync(reviewController.destroyReview));


module.exports = router;