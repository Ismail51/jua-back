const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/JUA");
const PORT = 3002;
const commentaryRouter = require("./controllers/commentary");
const blockedRouter = require("./controllers/blockedUsers");
const offerRouter = require("./controllers/offersControllers");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/comment", commentaryRouter);
app.use("/blockUser", blockedRouter);
app.use("/offers", offerRouter);

app.listen(PORT, () => {
  console.log("the server is listening on port : ", PORT);
});
