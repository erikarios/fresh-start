const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const checkInController = require("../controllers/checkIn");
const resourcesController = require("../controllers/resources");
const journalsController = require("../controllers/journal");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, checkInController.getProfile);
router.get("/resources", ensureAuth, resourcesController.getResources);
router.get("/journal", ensureAuth, journalsController.getJournals);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;