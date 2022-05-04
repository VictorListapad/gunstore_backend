const express = require(`express`);
const router = express.Router();
const GearReview = require(`../models/GearReview`);

// GET ALL GEAR REVIEWS
router.get(`/`, async (req, res) => {
  const allGearReviews = await GearReview.find();
  try {
    return res.status(200).json(allGearReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get reviews for gear` });
  }
});

// GET GEAR REVIEW BY ID
router.get(`/gearReview/:id`, async (req, res) => {
  const { id } = req.params;
  const singleReview = await GearReview.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleReview);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get review` });
  }
});

// GET ALL REVIEWS FOR SPECIFIC GEAR
router.get(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  const reviews = await GearReview.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get reviews for gear` });
  }
});

// CREATE GEAR REVIEW
router.post(`/gearReview`, async (req, res) => {
  const { productId, author } = req.body;
  const isExist = await GearReview.find({
    productId,
    author,
  });
  if (isExist.length) {
    return res
      .status(500)
      .json({ message: `User already created review for this product` });
  }
  const reviewToCreate = await GearReview.create(req.body);
  try {
    return res.status(201).json(reviewToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create review` });
  }
});

// UPDATE GEAR REVIEW
router.put(`/gearReview/:id`, async (req, res) => {
  const { id } = req.params;
  const reviewToUpdate = await GearReview.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(reviewToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update review` });
  }
});

// DELETE REVIEW
router.delete(`/gearReview/:id`, async (req, res) => {
  const { id } = req.params;
  await GearReview.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully Deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete review` });
  }
});

module.exports = router;
