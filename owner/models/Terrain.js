const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TerrainSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  prix: { type: Number, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "Owner" },
});

module.exports = Terrain = model("Terrain", TerrainSchema);
