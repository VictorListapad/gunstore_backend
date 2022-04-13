const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;

const PistolSchema = Schema({
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
  sights: {
    type: String,
    required: true,
    trim: true,
  },
  statesCompliant: {
    type: String,
    required: true,
    trim: true,
  },
  threadedBarrel: {
    type: String,
    required: true,
    trim: true,
    enum: ["Yes", "No"],
    default: "No",
  },
  size: {
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
  barrelLength: {
    type: String,
    required: true,
    trim: true,
  },
  weight: {
    type: String,
    required: true,
    trim: true,
  },
  sightRadius: {
    type: String,
    required: true,
    trim: true,
  },
  accessoryRail: {
    type: String,
    required: true,
    trim: true,
  },
  triggerAction: {
    type: String,
    required: true,
    trim: true,
  },
  triggerType: {
    type: String,
    required: true,
    trim: true,
  },
  gripModule: {
    type: String,
    required: true,
    trim: true,
  },
  gripType: {
    type: String,
    required: true,
    trim: true,
  },
  gripColor: {
    type: String,
    required: true,
    trim: true,
  },
  barrelMaterial: {
    type: String,
    required: true,
    trim: true,
  },
  frameFinish: {
    type: String,
    required: true,
    trim: true,
  },
  frameMaterial: {
    type: String,
    required: true,
    trim: true,
  },
  fcuFinish: {
    type: String,
    required: true,
    trim: true,
  },
  fcuMaterial: {
    type: String,
    required: true,
    trim: true,
  },
  slideFinish: {
    type: String,
    required: true,
    trim: true,
  },
  slideMaterial: {
    type: String,
    required: true,
    trim: true,
  },
  manualSafety: {
    type: String,
    required: true,
    trim: true,
    enum: ["Yes", "No"],
    default: "No",
  },
  opticReady: {
    type: String,
    required: true,
    trim: true,
    enum: ["Yes", "No"],
    default: "No",
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

module.exports = model(`Pistol`, PistolSchema);
