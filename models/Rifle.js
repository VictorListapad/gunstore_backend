const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;

const RifleSchema = Schema({
  type: {
    type: String,
    default: "rifle",
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
  sku: {
    type: String,
    required: true,
    trim: true,
  },
  caliber: {
    type: String,
    required: true,
    trim: true,
  },
  magsIncluded: {
    type: String,
    required: true,
    trim: true,
  },
  magType: {
    type: String,
    required: true,
    trim: true,
  },
  actionType: {
    type: String,
    required: true,
    trim: true,
  },
  statesCompliant: {
    type: String,
    trim: true,
  },
  stockType: {
    type: String,
    trim: true,
  },
  barrelLength: {
    type: String,
    required: true,
    trim: true,
  },
  barrelMaterial: {
    type: String,
    required: true,
    trim: true,
  },
  triggerType: {
    type: String,
    trim: true,
  },
  twistRate: {
    type: String,
    required: true,
    trim: true,
  },
  forendType: {
    type: String,
    required: true,
    trim: true,
  },
  gripType: {
    type: String,
    required: true,
    trim: true,
  },
  receiverFinish: {
    type: String,
    required: true,
    trim: true,
  },
  overallLength: {
    type: String,
    required: true,
    trim: true,
  },
  overallWidth: {
    type: String,
    required: true,
    trim: true,
  },
  height: {
    type: String,
    required: true,
    trim: true,
  },
  weight: {
    type: String,
    required: true,
    trim: true,
  },
  threads: {
    type: String,
    required: true,
    trim: true,
  },
  accessoryRail: {
    type: String,
    required: true,
    trim: true,
  },
  operatingSystem: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  titleImg: {
    type: String,
    required: true,
    trim: true,
  },
  extraImg1: {
    type: String,
    trim: true,
    default: "",
  },
  extraImg2: {
    type: String,
    trim: true,
    default: "",
  },
  extraImg3: {
    type: String,
    trim: true,
    default: "",
  },
});

module.exports = model("Rifle", RifleSchema);
