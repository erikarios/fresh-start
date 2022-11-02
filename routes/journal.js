const express = require("express");
const router = express.Router();
const journalsController = require("../controllers/journal");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, journalsController.singleJournal);
router.post("/createJournal", journalsController.createJournal);
router.put("/updateJournal/:id", journalsController.updateJournal);
router.delete("/deleteJournal/:id", journalsController.deleteJournal);

module.exports = router;