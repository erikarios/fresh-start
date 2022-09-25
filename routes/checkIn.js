const express = require("express");
const router = express.Router();
const checkInController = require("../controllers/checkIn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/addDate", checkInController.createDate);
//create or update
//post or put
router.get("/resources", checkInController.getResources);



module.exports = router;