const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;
const AmmunitionSchema = Schema({
  type: {
    type: String,
    default: "ammunition",
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  availability: {
    type: String,
    required: true,
    enum: ["Available", "Unavailable"],
    default: "Available",
    trim: true,
  },
  useFor: {
    type: String,
    required: true,
    trim: true,
  },
  ammoType: {
    type: String,
    required: true,
    trim: true,
  },
  caliber: {
    type: String,
    required: true,
    trim: true,
  },
  grainWeight: {
    type: Number,
    required: true,
    trim: true,
  },
  qtyPerPackage: {
    type: Number,
    required: true,
    trim: true,
  },
  muzzleVelocity: {
    type: Number,
    required: true,
    trim: true,
  },
  muzzleEnergy: {
    type: Number,
    required: true,
    trim: true,
  },
});

module.exports = model("Ammunition", AmmunitionSchema);
