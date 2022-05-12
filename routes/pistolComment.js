const express = require(`express`);
const router = express.Router();
const PistolComment = require(`../models/PistolComment`);

// GET ALL COMMENTS
router.get(`/`, async (req, res) => {
  const allPistolComments = await PistolComment.find();
  try {
    return res.status(200).json(allPistolComments);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistol comments` });
  }
});

// GET ALL COMMENTS FOR SPECIFIC PISTOL
router.get(`/pistol/:id`, async (req, res) => {
  const { id } = req.params;
  const commentsForPistol = await PistolComment.find({ productId: id })
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(commentsForPistol);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Couldn't get comments for pistol` });
  }
});

// GET COMMENT BY ID
router.get(`/pistolComment/:id`, async (req, res) => {
  const { id } = req.params;
  const singleComment = await PistolComment.findById(id)
    .populate(`author`)
    .populate(`productId`);
  try {
    return res.status(200).json(singleComment);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistol comment` });
  }
});

// CREATE PISTOL COMMENT
router.post(`/pistolComment`, async (req, res) => {
  const commentToCreate = await PistolComment.create(req.body);
  try {
    return res.status(201).json(commentToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create comment` });
  }
});

// UPDATE COMMENT
router.put(`/pistolComment/:id`, async (req, res) => {
  const { id } = req.params;
  const commentToUpdate = await PistolComment.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(commentToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update comment` });
  }
});

// DELETE PISTOL COMMENT
router.delete(`/pistolComment/:id`, async (req, res) => {
  const { id } = req.params;
  await PistolComment.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete comment` });
  }
});

module.exports = router;
