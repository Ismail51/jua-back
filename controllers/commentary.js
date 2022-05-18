const express = require("express");
const router = express.Router();
const commentaryControllers = require("../controllers/commentary-controllers");

router.post("/commentary", (req, res) => {
  const body = req.body;
  console.log(body);
  CommentaryModel.find();
});

router.get("/commentary", (req, res) => {
  res.json({
    message: "",
  });
});
