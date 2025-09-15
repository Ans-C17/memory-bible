import express from "express";
import MasterVerses from "../models/masterverses.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const verse = new MasterVerses(req.body);
    await verse.save();
    res.status(201).send("Verse Added");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const verses = await MasterVerses.find();
    res.status(201).json(verses);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
