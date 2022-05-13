const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const RifleReviewSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
    trim: true,
  },
  grade: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 5,
    required: true,
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

module.exports = model(`RifleReview`, RifleReviewSchema);
