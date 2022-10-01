const Journal = require("../models/Journal");
const moment = require("moment");

module.exports = {
    // GET all journal entries
  getJournalEntries: async (req, res) => {
    try {
      const journals = await Journal.find({ user: req.user.id }).sort({ createdAt: "desc" }).lean();
      res.render("entries.ejs", { journals: journals, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createJournal: async (req, res) => {
    try {
      await Journal.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user.id,
      });
      console.log("Journal has been added!");
      res.redirect("/entries");
    } catch (err) {
      console.log(err);
    }
  },
  deleteJournal: async (req, res) => {
    try {
      let journal = await Journal.findById({ _id: req.params.id });
      await Journal.remove({ _id: req.params.id });
      console.log("Deleted Journal");
      res.redirect("/entries");
    } catch (err) {
      res.redirect("/entries");
    }
  },
    // GET single journal entry
  singleJournal: async (req, res) => {
    try {
      const journal = await Journal.findById(req.params.id).populate('user')
      .lean();
      res.render("singleJournal.ejs", { journal: journal, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
    // Update single journal entry
  updateJournal: async (req, res) => {
    try {
        await Journal.findOneAndUpdate({ _id: req.params.id },
            req.body, {
                new: true,
                runValidators: true,
        });
        const journal = await Journal.findById({ _id: req.params.id });
        res.render(`/journal/${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
  },
};