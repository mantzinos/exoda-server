const express = require("express");
const router = express.Router();

const { Charge } = require("../../models/Charge");

router.post("/exoda", async (req, res) => {
  try {
    const charge = new Charge(req.body);
    await charge.save();
    res.send(charge);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/exoda/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);
    const oloi = await Charge.find({});
    const mono = oloi.filter(prev => prev.user.username === name);
    // res.send(oloi);
    res.send(mono);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
