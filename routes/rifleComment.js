const express = require(`express`);
const router = express.Router();
const RifleComment = require(`../models/RifleComment`);

// GET ALL RIFLE COMMENTS
router.get(`/`, async (req, res) => {
  const allRifleComments = await RifleComment.find();
  try {
    return res.status(200).json(allRifleComments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle comments` });
  }
});

// GET ALL COMMENTS FOR SPECIFIC RIFLE
router.get(`/rifle/:id`, async (req, res) => {
  const { id } = req.params;
  const commentsForRifle = await RifleComment.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(commentsForRifle);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get comments for rifle` });
  }
});

// GET RIFLE COMMENT BY ID
router.get(`/rifleComment/:id`, async (req, res) => {
  const { id } = req.params;
  const singleComment = await RifleComment.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle comment` });
  }
});

// CREATE RIFLE COMMENT
router.post(`/rifleComment`, async (req, res) => {
  const commentToCreate = await RifleComment.create(req.body);
  try {
    return res.status(201).json(commentToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create comment` });
  }
});

// UPDATE RIFLE COMMENT
router.put(`/rifleComment/:id`, async (req, res) => {
  const { id } = req.params;
  const updatedComment = await RifleComment.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(updatedComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update rifle comment` });
  }
});

// DELETE RIFLE COMMENT
router.delete(`/rifleComment/:id`, async (req, res) => {
  const { id } = req.params;
  await RifleComment.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete rifle comment` });
  }
});

module.exports = router;
