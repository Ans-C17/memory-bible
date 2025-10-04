import mongoose from "mongoose";

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

  repetition: { type: Number, default: 0 },
  interval: { type: Number, default: 1 },
  ef: { type: Number, default: 2.5 },
  dueDate: { type: Date, default: Date.now },
  lastReviewDate: { type: Date, default: Date.now },
  quality: { type: Number, enum: [1, 2, 3], default: 3 },
});

userVerseSchema.index({ userId: 1 }, { unique: true });
//basically mongodb usually finds stuff using _id, but if we wanna search like using userid and the verse the user chose, it gon take time
//why? coz it has to scan all docs for this, instead of how _id would just map it to the right thing
//so if we want user ans's verse john3:16, it has to see the user id, find all n matches of it, then search the verse, lag
//so we make this job easier by making a userid+verseid a field to search on, so it can like locate it instantly
//the 1 means sort in ascending, athrollo

export default mongoose.model("UserVerses", userVerseSchema);
