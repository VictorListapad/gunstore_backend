const express = require(`express`);
const router = express.Router();
const Rifle = require(`../models/Rifle`);

// GET ALL RIFLES
router.get(`/`, async (req, res) => {
  const allRifles = await Rifle.find();
  try {
    return res.status(200).json(allRifles);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifles` });
  }
});

// GET RIFLE BY ID
router.get(`/rifle/:id`, async (req, res) => {
  const { id } = req.params;
  const singleRifle = await Rifle.findById(id);
  try {
    return res.status(200).json(singleRifle);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get rifle` });
  }
});

// CREATE NEW RIFLE
router.post(`/rifle`, async (req, res) => {
  const rifleToCreate = await Rifle.create(req.body);
  try {
    return res.status(201).json(rifleToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create rifle` });
  }
});

// UPDATE RIFLE
router.put(`/rifle/:id`, async (req, res) => {
  const { id } = req.params;
  const rifleToUpdate = await Rifle.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(rifleToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update rifle` });
  }
});

// DELETE RIFLE
router.delete(`/rifle/:id`, async (req, res) => {
  const { id } = req.params;
  await Rifle.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update rifle` });
  }
});
module.exports = router;
