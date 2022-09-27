const express = require("express");
const moment = require('moment');
const router = express.Router();
const checkInController = require("../controllers/checkIn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/addDate", checkInController.createDate);



module.exports = router;