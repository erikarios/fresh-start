const CheckIn = require("../models/CheckIn");

//Need to create another controller for updating sober tracker
//Need new model as well
//Need to put it together on profile page

//soberSince needs to appear but it is in the User model not CheckIn

module.exports = {
  getProfile: async (req, res) => {
    try {
      const checkIn = await CheckIn.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user , soberSince: req.body.soberSince }); //check this line. Not sure if it's right
    } catch (err) {
      console.log(err);
    }
  },
  getResources: async (req, res) => {
    try {
      res.render("resources.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  createDate: async (req, res) => {
    try {
      await Post.create({
        soberTracker: req.body, //Need help soberSince: req.body.soberSince,
        user: req.user.id,
      });
      console.log("Another day has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};