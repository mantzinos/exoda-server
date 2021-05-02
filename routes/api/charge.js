const express = require("express");
const router = express.Router();
const { userSchema } = require("../../models/User");
const User = require("../../models/User");

const { Charge } = require("../../models/Charge");

router.post("/exoda", async (req, res) => {
  try {
    const exodaGet = req.body;
    console.log(exodaGet);
    const charge = new Charge(exodaGet);
    await charge.save();
    res.send("ok");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/exoda/:name", async (req, res) => {
  try {
    const { name } = req.params;
    // console.log(name);
    const oloi = await Charge.find();
    // const mono = oloi.filter(prev => prev[0].user.username === name);
    // const mono = await oloi.filter(a => a.kafes === 33);
    // const mono = await oloi.filter(a => a.user.username === "artemis");
    const mono = oloi.filter(a => a.user.username === "artemis");
    res.send(mono);
    // res.send(oloi);
    // res.send(mono);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
