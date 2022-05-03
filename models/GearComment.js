const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;
const GearCommentSchema = Schema({
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
    ref: "Gear",
    required: true,
  },
});

module.exports = model(`GearComment`, GearCommentSchema);
