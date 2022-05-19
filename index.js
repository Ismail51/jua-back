const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/profils");
const PORT = 3002;
const commentaryRouter = require("./controllers/commentary");
const profilHelpersRouter = require ("./controllers/profilHelpers")

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/comment", commentaryRouter);
app.use("/profil/helpers",profilHelpersRouter);
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
