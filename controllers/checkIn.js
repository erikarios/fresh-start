const CheckIn = require("../models/CheckIn");
const moment = require("moment");

module.exports = {
  getProfile: async (req, res) => {
    try {

      const currentDate = moment();
      const soberSinceDate = moment(req.body.soberSince, "YYYY-MM-DD");
      const daysSober = currentDate.diff(soberSinceDate, "days");
  
      const checkIn = await CheckIn.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user , soberSinceDate: soberSinceDate, daysSober: daysSober }); 
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
 /* updateDays: async (req, res) => {
    try {
      await checkIn.findOneAndUpdate(
        { soberTally: req.body.soberSince },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Another day has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  resetDays: async (req, res) => {
    try {
      // Find post by id
      let reset = await checkIn.findById({ _id: req.params.id });
      // Delete post from db
      await Reset.remove({ soberTally: req.body.soberSince  });
      console.log("Days have been reset!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
    
  
*/
};