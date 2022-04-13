const express = require(`express`);
const router = express.Router();
const Pistol = require(`../models/Pistol`);

// GET ALL PISTOLS
router.get(`/`, async (req, res) => {
  const allPistols = await Pistol.find();
  try {
    return res.status(200).json(allPistols);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get pistols` });
  }
});

// GET PISTOL BY ID
router.get(`/pistol/:id`, async (req, res) => {
  const { id } = req.params;
  const singlePistol = await Pistol.findById(id);
  try {
    return res.status(200).json(singlePistol);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get the pistol` });
  }
});

// POST PISTOL
router.post(`/pistol`, async (req, res) => {
  const pistolToCreate = await Pistol.create(req.body);
  try {
    return res.status(201).json(pistolToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create the pistol` });
  }
});

// UPDATE PISTOL
router.put(`/pistol/:id`, async (req, res) => {
  const { id } = req.params;
  const pistolToUpdate = await Pistol.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(pistolToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update the pistol` });
  }
});

// DELETE PISTOL
router.delete(`/pistol/:id`, async (req, res) => {
  const { id } = req.params;
  await Pistol.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted!` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete the pistol` });
  }
});

module.exports = router;
