const express = require("express");
const authCheck = require("../Middleware/authCheck");
const User = require("../Models/User");
const Settings = require("../Models/Settings");
const scansController = require("../controllers/scans-controllers");
const chatController = require("../controllers/chat-controllers");
const Conversation = require("../Models/Conversations");
const router = express.Router();

router.post("/submitscans", async (req, res) => {
  try {
    let response = await scansController.submitScans(req.body);
    console.log(response);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});
router.post("/getmyscans", async (req, res) => {
  try {
    let response = await scansController.getMyScans(req.body);
    //console.log(response);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});
router.post("/getallscans", async (req, res) => {
  try {
    let response = await scansController.getAllScans(req.body);
    //console.log(response);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});
router.post("/getscanid", scansController.getScanId);
router.post("/scanfrequency", scansController.scanFrequency);
router.post("/cron", scansController.cronSchedule);

module.exports = router;
