const mongoose = require(`mongoose`);
const { model, Schema } = mongoose;

const GearReviewSchema = Schema({
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
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Gear",
    required: true,
  },
});

module.exports = model(`GearReview`, GearReviewSchema);
