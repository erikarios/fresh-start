const express = require("express");
const router = express.Router();
const checkInController = require("../controllers/checkIn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.put("/updateDays", checkInController.updateDays);
router.put("/resetDays", checkInController.resetDays);

module.exports = router;