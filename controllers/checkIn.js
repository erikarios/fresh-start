const User = require("../models/User");
const moment = require("moment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      let soberSince = moment.utc(req.user.soberSince).format('LL');
      const checkIn = await User.find({ user: req.user.id });
      res.render("profile.ejs", { checkIn: checkIn, user: req.user, soberSince: soberSince  }); 
    } catch (err) {
      console.log(err);
    }
  },
  updateDays: async (req, res) => {
    try {
      await User.findByIdAndUpdate( {_id: req.user._id}, { daysSober: req.user.daysSober +1});
      console.log("Another day has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  resetDays: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        { _id: req.user._id }, 
        {
          daysSober: 0,
          $set: { soberSince: Date.now() }
        }
      );
      console.log("Days have been reset!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};