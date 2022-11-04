const Journal = require("../models/Journal");
const User = require("../models/User");
const moment = require("moment");

module.exports = {
    // GET all journal entries
  getJournals: async (req, res) => {
    try {
      const journal = await Journal.find({ user: req.user.id }).sort({ createdAt: "asc" }).populate('user').lean();
      res.render("journal.ejs", { journal: journal });
    } catch (err) {
      console.log(err);
    }
  },
  createJournal: async (req, res) => {
    try {
        const now = new Date()
      await Journal.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user.id,
        createdAt: now
      });
      console.log("Journal has been added!");
      res.redirect("/journal");
    } catch (err) {
      console.log(err);
    }
  },
  deleteJournal: async (req, res) => {
    try {
      const journal = await Journal.findById({ _id: req.params.id });
      await Journal.remove({ _id: req.params.id });
      console.log("Deleted Journal");
      res.redirect("/journal");
    } catch (err) {
     console.log(err);;
    }
  },
    // GET single journal entry
  singleJournal: async (req, res) => {
    try {
    // const journal = await Journal.findOne({ _id : req.params.id })
    const journal = await Journal.findById({ _id : req.params.id })

    let createdAt = journal.createdAt.toLocaleString('en-US', {
             timeZone: 'America/Los_Angeles'
            //  dateStyle: 'long',
            //  timeStyle: 'short',
           });
           console.log(journal)
    res.render("singleJournal.ejs", { journal: journal, createdAt: createdAt });
    
    } catch (err) {
      console.log(err);
    }
  },
    //Update single journal entry
  updateJournal: async (req, res) => {
    try {
        const after = await Journal.findByIdAndUpdate(
            req.params.id,
            {
              title: req.body.journalTitle,
              body: req.body.journalText,
            },
            {
              returnDocument: "after",
            }
          );
          console.log("Journal updated");
          res.redirect(`/journal/${req.params.id}`);
    } catch (err) {
        console.log(err);
    }
  },
 };