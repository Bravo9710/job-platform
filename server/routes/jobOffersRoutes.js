const express = require("express");
const router = express.Router();
const jobOffersController = require("../controllers/jobOffersController");

router.get("/", jobOffersController.getJobOffers);

module.exports = router;
