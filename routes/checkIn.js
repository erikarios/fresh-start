const express = require("express");
const router = express.Router();
const checkInController = require("../controllers/checkIn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/addDate", checkInController.createDate);
//router.put("/updateDays", checkInController.updateDays);
//router.delete("/resetDays", checkInController.resetDays);




module.exports = router;