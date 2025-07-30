const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// function for login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id);
  res.json({ token });
};


// function for register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const newUser = new User({ username, password });
  await newUser.save();

  const token = generateToken(newUser._id);
  res.status(201).json({ token });
};


 
