import express from "express";
import UserVerses from "../models/userverses.js";
import userverses from "../models/userverses.js";

const router = express.Router();

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

router.post("/", async (req, res) => {
  try {
    console.log("im inside the post request");
    const { userId, verseId } = req.body;
    const userVerse = await UserVerses.create({ userId, verseId });

    res.status(201).json({
      message: "Verse Added",
      data: userVerse,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "This verse is already in your list" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:userId", async (req, res) => {
  console.log("im inside the get request");
  try {
    const { userId } = req.params;
    const verses = await UserVerses.find({ userId }).populate("verseId");
    const shuffledVerses = shuffleArray(verses);
    //send this thru the sm2 alg and return the real array i think.
    res.status(200).json(shuffledVerses);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
