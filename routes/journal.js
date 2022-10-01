const express = require("express");
const router = express.Router();
const journalController = require("../controllers/journal");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, journalController.singleJournal);

router.post("/createJournal", journalController.createJournal);

router.put("/updateJournal/:id", journalController.updateJournal);

router.delete("/deleteJournal/:id", journalController.deleteJournal);

module.exports = router;