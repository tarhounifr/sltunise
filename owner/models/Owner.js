// require mongoose
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const OwnerSchema = new Schema({
  identifiant: { type: String, required: true },
  email: { type: String },
  adress: { type: String, required: true },
  gov: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  terrain: [{ type: Schema.Types.ObjectId, ref: "Terrain" }],
});

module.exports = Owner = model("Owner", OwnerSchema);
