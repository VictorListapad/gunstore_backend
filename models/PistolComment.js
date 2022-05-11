const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;

const PistolCommentSchema = Schema({
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
    ref: "Pistol",
    required: true,
  },
});

module.exports = model(`PistolComment`, PistolCommentSchema);
