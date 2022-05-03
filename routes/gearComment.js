const express = require(`express`);
const router = express.Router();
const GearComment = require(`../models/GearComment`);

// GET ALL COMMENTS
router.get(`/`, async (req, res) => {
  const allGear = await GearComment.find();
  try {
    return res.status(200).json(allGear);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get gear comments` });
  }
});

// GET ALL COMMENTS FOR GAME
router.get(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  const comments = await GearComment.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get comments` });
  }
});

// GET COMMENT BY ID
router.get(`/gearComment/:id`, async (req, res) => {
  const { id } = req.params;
  const singleComment = await GearComment.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get comment` });
  }
});

// CREATE COMMENT
router.post(`/gearComment`, async (req, res) => {
  const commentToCreate = await GearComment.create(req.body);
  try {
    return res.status(201).json(commentToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create comment` });
  }
});

// UPDATE COMMENT
router.put(`/gearComment/:id`, async (req, res) => {
  const { id } = req.params;
  const commentToUpdate = await GearComment.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(commentToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't Update Comment` });
  }
});

// DELETE COMMENT
router.delete(`/gearComment/:id`, async (req, res) => {
  const { id } = req.params;
  await GearComment.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete the comment` });
  }
});

module.exports = router;
