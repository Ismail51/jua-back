const express = require("express");
const mongoose = require("mongoose");
const CommentaryModel = require("../Models/CommentaryModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  const newCommentary = new CommentaryModel(body);

  try {
    const commentary = await newCommentary.save();
    res.json(commentary);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  if (!mongoose.Types.obejectId.isValid(id)) {
    return res.status(400).send("The id needs to be an ObjectId");
  }
  CommentaryModel.findById(id)
    .populate("comment")
    .exec()
    .then((comentary) => {
      console.log(comment);
      res.json(comment);
    })
    .catch((err) => res.status(500).send("Interval server error"));
});

router.put("/:id", (req, res, next) => {
  const text = req.query.text;
  const id = req.params.id;
  console.log("text ==>", text);
  console.log("id ==>", id);
  CommentaryModel.findByUpdate(
    id,
    {
      text,
    },
    { new: true }
  )
    .then((CommentaryUpdated) => {
      res.json(CommentaryUpdated);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  CommentaryModel.findByIdandDelete(id)
    .exec()
    .then((commentaryDelete) => {
      res.json(commentaryDelete);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

module.exports = router;
