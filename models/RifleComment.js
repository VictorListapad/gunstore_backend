const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;
const RifleCommentSchema = Schema({
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
    ref: "Rifle",
    required: true,
  },
});

module.exports = model(`RifleComment`, RifleCommentSchema);
