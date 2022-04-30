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

module.exports = router;
