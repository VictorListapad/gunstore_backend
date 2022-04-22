const express = require(`express`);
const router = express.Router();
const Ammunition = require(`../models/Ammunition`);

// GET ALL AMMO
router.get(`/`, async (req, res) => {
  const allAmmunition = await Ammunition.find();
  try {
    return res.status(200).json({ allAmmunition });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammunition` });
  }
});

// GET SINGLE AMMO
router.get(`/ammo/:id`, async (req, res) => {
  const { id } = req.params;
  const singleAmmo = await Ammunition.findById(id);
  try {
    return res.status(200).json(singleAmmo);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get ammunition` });
  }
});

// CREATE AMMO
router.post(`/ammo`, async (req, res) => {
  const ammoToCreate = await Ammunition.create(req.body);
  try {
    return res.status(201).json(ammoToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create ammo` });
  }
});

// UPDATE AMMO
router.put(`/ammo/:id`, async (req, res) => {
  const { id } = req.params;
  const ammoToUpdate = await Ammunition.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(ammoToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update ammo` });
  }
});

// DELETE AMMO
router.delete(`/ammo/:id`, async (req, res) => {
  const { id } = req.params;
  await Ammunition.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully Deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete ammo` });
  }
});

module.exports = router;
