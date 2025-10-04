import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import versesRouter from "./routes/verses.js";
import usersRouter from "./routes/auth.js";
import userVersesRouter from "./models/userverses.js";

const app = express();
app.use(cors()); //lets cross origin requests accepting
app.use(express.json());
//a middleware runs during req res cycle. so if a req comes in with a json body, it automatically parses and puts it into req.body

try {
  await mongoose.connect("mongodb://localhost/bibledb");
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Connection gone wrong with MongoDB");
}

app.use("/verses", versesRouter);
app.use("/auth", usersRouter);
app.use("/userverses", userVersesRouter);

app.listen(3000, () => {
  console.log("Server started!");
});
