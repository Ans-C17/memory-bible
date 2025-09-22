import mongoose, { Mongoose } from "mongoose";

const userVerseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  verseId: {
    type: mongoose.Schema.ObjectId,
    ref: "MasterVerses",
    required: true,
  },
});
