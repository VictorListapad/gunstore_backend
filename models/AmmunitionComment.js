const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const AmmunitionCommentSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Ammunition",
    required: true,
  },
});

module.exports = model(`AmmunitionComment`, AmmunitionCommentSchema);
