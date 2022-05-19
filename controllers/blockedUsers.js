const express = require("express");
const router = express.Router();
const CommentaryModel = require("../Models/CommentaryModel");

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
});

router.get("/:id", (req, res) => {
  const params = req.params.id;
  res.json({ params });
});
module.exports = router;
