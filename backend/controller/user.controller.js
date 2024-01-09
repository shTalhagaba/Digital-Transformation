const { body } = require("express-validator");
const User = require("../modals/user.modal");
const jwt = require("jsonwebtoken");
const { application, json } = require("express");

exports.createUserProfile = async (req, res) => {
  const { email } = req.body;
  let existingUser = null;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  if (existingUser) {
    return res.status(422).json({
      message: "user with this email already exists",
    });
  } else {
    let updatedBody = { ...req.body };
    const user = new User(updatedBody);

    try {
      const createdUser = await user.save();
      return res.status(201).json({ user: createdUser });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};

exports.getUserDetails = async (req, res) => {
  const id = req.query.id;
  User.findById(id, function (err, user) {
    if (err) return res.status(404).json({ message: "User doesnot exist" });
    return res.status(200).json({ user: user });
  });
};

exports.deleteUserDetails = async (req, res) => {
    const id = req.query.id;
    User.findByIdAndDelete(id, function (err, user) {
      if (err) return res.status(404).json({ message: "User doesnot exist" });
      return res.status(200).json({ message: 'User deleted successfully' });
    });
  };
