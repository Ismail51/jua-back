const express = require("express");
const router = express.Router();
// const commentaryControllers = require("../controllers/commentary-controllers");

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
});

router.get("/", (req, res) => {
  res.json({
    message: "",
  });
});
module.exports = router;
