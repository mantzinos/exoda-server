const express = require("express");
const router = express.Router();
const { User } = require("../../models/User");
const { ChargeSchema } = require("../../models/Charge");
const { Charge } = require("../../models/Charge");
const { UserSchema } = require("../../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const userGet = req.body;
    const user = new User(userGet);
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(userGet.password, salt);
    await user.save();
    res.send("ok");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      // const isMatch = await bcrypt.compare(password, user.password);
      if (password === user.password) {
        res.send("User login");
      } else {
        res.send("Wrong password");
      }
    } else {
      res.send("User not exist");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/main/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);
    const user = await User.findOne({ username: name });
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/main/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name);
    const user = await User.findOne({ username: name });
    const all = req.body;
    const charge = new Charge(req.body);
    charge.user = user;
    await charge.save();
    res.send("ok");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
