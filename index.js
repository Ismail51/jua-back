const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/JUA");
const PORT = 3002;
const commentaryRouter = require("./controllers/commentary");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/comment", commentaryRouter);

app.listen(PORT, () => {
  console.log("the server is listening on port : ", PORT);
});

// app.post("/offers", (req, res) => {
//   const body = req.body;
//   console.log(body);
// });
// app.post("/", (req, res) => {
//   const body = req.body;
//   console.log(body);
// });
