const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3002;
const cors = require("cors");

app.use(cors());

app.listen(PORT, () => {
  console.log("the server is listening on port : ", PORT);
});

app.post("/commentary", (req, res) => {
  const body = req.body;
  console.log(body);
});
app.get("/commentary", (req, res) => {});
app.post("/offers", (req, res) => {
  const body = req.body;
  console.log(body);
});
app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
});
