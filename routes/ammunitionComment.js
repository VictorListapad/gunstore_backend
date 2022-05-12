const express = require(`express`);
const router = express.Router();
const AmmunitionComment = require(`../models/AmmunitionComment`);

// GET ALL AMMO COMMENTS
router.get(`/`, async (req, res) => {
  const allAmmoComments = await AmmunitionComment.find();
  try {
    return res.status(200).json(allAmmoComments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammo comments` });
  }
});

// GET ALL COMMENTS FOR A SPECIFIC AMMO
router.get(`/ammo/:id`, async (req, res) => {
  const { id } = req.params;
  const ammoComments = await AmmunitionComment.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(ammoComments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammo comments` });
  }
});

// GET AMMO COMMENT BY ID
router.get(`/ammunitionComment/:id`, async (req, res) => {
  const { id } = req.params;
  const singleAmmoComment = await AmmunitionComment.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleAmmoComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammo comment` });
  }
});

// CREATE AMMO COMMENT
router.post(`/ammunitionComment`, async (req, res) => {
  const commentToCreate = await AmmunitionComment.create(req.body);
  try {
    return res.status(201).json(commentToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create ammo comment` });
  }
});

// UPDATE AMMO COMMENT
router.put(`/ammunitionComment/:id`, async (req, res) => {
  const { id } = req.params;
  const updatedComment = await AmmunitionComment.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );
  try {
    return res.status(202).json(updatedComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update ammo comment` });
  }
});

// DELETE AMMO COMMENT
router.delete(`/ammunitionComment/:id`, async (req, res) => {
  const { id } = req.params;
  await AmmunitionComment.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete comment` });
  }
});

module.exports = router;
