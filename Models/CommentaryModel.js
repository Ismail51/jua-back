const mongoose = require("mongoose");

const CommentarySchema = new mongoose.Schema({
  text: String,
  rating: [
    {
      type: mongoose.Types.ObjectId,
      ref: "helped",
    },
  ],
  created_by: [
    {
      type: mongoose.Types.ObjectId,
      ref: "helped",
    },
  ],
  created_by2: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Helpers",
    },
  ],
  date: Date,
  picture: String,
});

const CommentaryModel = new mongoose.model("commentary", CommentarySchema);
module.exports = CommentaryModel;
