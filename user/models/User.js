const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  identifiant: { type: String, required: true },
  gov: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

module.exports = User = model("user", UserSchema);
