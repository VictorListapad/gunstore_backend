const express = require(`express`);
const router = express.Router();
const bcrypt = require(`bcrypt`);
const { generateJwt } = require(`../helpers/processJwt`);
const User = require(`../models/User`);

// GET ALL USERS
router.get(`/`, async (req, res) => {
  const users = await User.find();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get users` });
  }
});

// SIGN UP
router.post(`/signup`, async (req, res) => {
  const { email, username } = req.body;
  const testEmail = await User.findOne({ email });
  if (testEmail) {
    return res
      .status(500)
      .json({ message: `Couldn't sign up. Please check credentials` });
  }
  const testUsername = await User.findOne({ username });
  if (testUsername) {
    return res
      .status(500)
      .json({ message: `Couldn't sign up. Please check credentials` });
  }
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Couldn't sign up. Please check credentials` });
  }
});

// LOG IN
router.post(`/signin`, async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(500).json({ message: `Please check credentials` });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(500).json({ message: `Please check credentials` });
  }
  const token = await generateJwt(user._id);
  return res.status(200).json({ token, user });
});

// GET USER BY ID
router.get(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  try {
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get the user` });
  }
});
// UPDATE USER
router.put(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  const userToUpdate = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(userToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update user` });
  }
});
// DELETE USER
router.delete(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully Deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete user` });
  }
});

module.exports = router;
