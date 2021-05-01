const mongoose = require("mongoose");
const { UserSchema } = require("./User");

const ChargeSchema = new mongoose.Schema({
  kafes: {
    type: Number,
  },
  logariasmoi: {
    type: Number,
  },
  supermarket: {
    type: Number,
  },
  internet: {
    type: Number,
  },
  user: {
    type: UserSchema,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Charge = new mongoose.model("charge", ChargeSchema);
module.exports = {
  Charge,
  ChargeSchema,
};
