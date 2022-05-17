const express = require(`express`);
const router = express.Router();
const PistolReview = require(`../models/PistolReview`);

// GET ALL PISTOL REVIEWS
router.get(`/`, async (req, res) => {
  const allPistolReviews = await PistolReview.find();
  try {
    return res.status(200).json(allPistolReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistol reviews` });
  }
});

// GET PISTOL REVIEW BY ID
router.get(`/pistolReview/:id`, async (req, res) => {
  const { id } = req.params;
  const singlePistolReview = await PistolReview.findById(id);
  try {
    return res.status(200).json(singlePistolReview);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistol review` });
  }
});

// GET ALL REVIEWS FOR SPECIFIC PISTOL
router.get(`/pistol/:id`, async (req, res) => {
  const { id } = req.params;
  const pistolReviews = await PistolReview.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(pistolReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistol reviews` });
  }
});

// CREATE PISTOL REVIEW
router.post(`/pistolReview`, async (req, res) => {
  const { productId, author } = req.body;
  const isExist = await PistolReview.find({ productId, author });
  if (isExist.length) {
    return res
      .status(500)
      .json({ message: `User already created review for this product` });
  }
  const reviewToCreate = await PistolReview.create(req.body);
  try {
    return res.status(201).json(reviewToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create pistol review` });
  }
});

// UPDATE PISTOL REVIEW
router.put(`/pistolReview/:id`, async (req, res) => {
  const { id } = req.params;
  const reviewToUpdate = await PistolReview.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(reviewToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update review` });
  }
});

// DELETE REVIEW
router.delete(`/pistolReview/:id`, async (req, res) => {
  const { id } = req.params;
  await PistolReview.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete pistol review` });
  }
});

module.exports = router;
