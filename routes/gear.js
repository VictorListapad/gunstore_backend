const express = require(`express`);
const router = express.Router();
const Gear = require(`../models/Gear`);

// GET ALL GEAR
router.get(`/`, async (req, res) => {
  const allGear = await Gear.find();
  try {
    return res.status(200).json(allGear);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get gear` });
  }
});

// GET GEAR BY ID
router.get(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  const singleItem = await Gear.findById(id);
  try {
    return res.status(200).json(singleItem);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get gear` });
  }
});

// CREATE GEAR
router.post(`/item`, async (req, res) => {
  const gearToCreate = await Gear.create(req.body);
  try {
    return res.status(201).json(gearToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create gear` });
  }
});

// UPDATE GEAR
router.put(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  const gearToUpdate = await Gear.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(gearToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update gear` });
  }
});

// DELETE GEAR
router.delete(`/item/:id`, async (req, res) => {
  const { id } = req.params;
  await Gear.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully Deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete gear` });
  }
});

module.exports = router;
