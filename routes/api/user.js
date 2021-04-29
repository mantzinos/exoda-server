const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.post("/register", async (req, res) => {
  try {
    const userGet = req.body;
    const user = new User(userGet);
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

module.exports = router;
