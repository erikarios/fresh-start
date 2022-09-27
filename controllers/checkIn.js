const CheckIn = require("../models/CheckIn");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const checkIn = await CheckIn.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user , soberSince: req.body.soberSince }); 
    } catch (err) {
      console.log(err);
    }
  },
  createDate: async (req, res) => {
    try {
      await Post.create({
        soberTracker: req.body, 
        user: req.user.id,
      });
      console.log("Another day has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};