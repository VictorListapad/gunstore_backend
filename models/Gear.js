const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const GearSchema = Schema({
  type: {
    type: String,
    default: "gear",
  },
  preciseType: {
    type: String,
    enum: [
      "Knife",
      "Optics",
      "Bag",
      "Vest",
      "EarAndEyeProtection",
      "Holster",
      "PlateCarrier",
    ],
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  newProduct: {
    type: Boolean,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true,
  },
  features: {
    type: String,
    trim: true,
  },
  availableSizes: {
    type: String,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  fullDescription: {
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
  overallLength: {
    type: String,
    trim: true,
  },
  overallWidth: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    trim: true,
  },
  protectionLevel: {
    type: String,
    trim: true,
  },
  attachmentType: {
    type: String,
    trim: true,
  },
  battery: {
    type: String,
    trim: true,
  },
  material: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
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

module.exports = model(`Gear`, GearSchema);
