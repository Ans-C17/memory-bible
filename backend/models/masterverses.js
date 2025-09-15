import mongoose from "mongoose";

const masterSchema = new mongoose.Schema({
  id: Number,
  quote: {
    ml: String,
    en: String,
  },
  book: {
    ml: String,
    en: String,
  },
  chapter: Number,
  verse: Number,
});

const MasterVerses = mongoose.model("MasterVerses", masterSchema);
export default MasterVerses;
