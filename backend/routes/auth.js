import express from "express";
import Users from "../models/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

//signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const exists = await Users.findOne({ email });
    if (exists) return res.status(400).json({ error: "User already exists" });

    const user = await Users.create({ email, password, name });
    //create method automatically does new Users + Users.save() in one go, so pre middleware is ran
    res.status(201).json({
      message: "User created successfully",
      userId: user._id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    res.status(200).json({
      message: "Login successful",
      userId: user._id,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
