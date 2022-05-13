const express = require(`express`);
const router = express.Router();
const AmmunitionReview = require(`../models/AmmunitionReview`);

// GET ALL AMMUNITION REVIEWS
router.get(`/`, async (req, res) => {
  const allReviews = await AmmunitionReview.find();
  try {
    return res.status(200).json(allReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammunition reviews` });
  }
});

// GET AMMUNITION REVIEW BY ID
router.get(`/ammunitionReview/:id`, async (req, res) => {
  const { id } = req.params;
  const singleAmmoReview = await AmmunitionReview.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleAmmoReview);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammunition review` });
  }
});

// GET ALL REVIEWS FOR SPECIFIC AMMUNITION
router.get(`/ammo/:id`, async (req, res) => {
  const { id } = req.params;
  const ammoReviews = await AmmunitionReview.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(ammoReviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammo reviews` });
  }
});

// CREATE AMMO REVIEW
router.post(`/ammunitionReview`, async (req, res) => {
  const { productId, author } = req.body;
  const isExist = await AmmunitionReview.find({ productId, author });
  if (isExist.length) {
    return res
      .status(500)
      .json({ message: `User already created review for this product` });
  }
  const reviewToCreate = await AmmunitionReview.create(req.body);
  try {
    return res.status(201).json(reviewToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create review` });
  }
});

// UPDATE AMMO REVIEW
router.put(`/ammunitionReview/:id`, async (req, res) => {
  const { id } = req.params;
  const reviewToUpdate = await AmmunitionReview.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );
  try {
    return res.status(202).json(reviewToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update review` });
  }
});

// DELETE AMMO REVIEW
router.delete(`/ammunitionReview/:id`, async (req, res) => {
  const { id } = req.params;
  await AmmunitionReview.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete review` });
  }
});

module.exports = router;
