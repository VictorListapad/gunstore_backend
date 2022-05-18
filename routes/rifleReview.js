const express = require(`express`);
const router = express.Router();
const RifleReview = require(`../models/RifleReview`);

// GET ALL RIFLE REVIEWS
router.get(`/`, async (req, res) => {
  const rifleReviews = await RifleReview.find();
  try {
    return res.status(200).json(rifleReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle reviews` });
  }
});

// GET ALL REVIEWS FOR A SPECIFIC RIFLE
router.get(`/rifle/:id`, async (req, res) => {
  const { id } = req.params;
  const reviews = await RifleReview.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle reviews` });
  }
});

// GET RIFLE REVIEW BY ID
router.get(`/rifleReview/:id`, async (req, res) => {
  const { id } = req.params;
  const singleReview = await RifleReview.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleReview);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle review` });
  }
});

// CREATE RIFLE REVIEW
router.post(`/rifleReview`, async (req, res) => {
  const { author, productId } = req.body;
  const isExist = await RifleReview.find({ productId, author });
  if (isExist.length) {
    return res
      .status(500)
      .json({ message: `User already created review for this product` });
  }
  const reviewToCreate = await RifleReview.create(req.body);
  try {
    return res.status(201).json(reviewToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create rifle review` });
  }
});

// UPDATE RIFLE REVIEW
router.put(`/rifleReview/:id`, async (req, res) => {
  const { id } = req.params;
  const reviewToUpdate = await RifleReview.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(reviewToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update rifle review` });
  }
});

// DELETE RIFLE REVIEW
router.delete(`/rifleReview/:id`, async (req, res) => {
  const { id } = req.params;
  await RifleReview.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete rifle review` });
  }
});

module.exports = router;
