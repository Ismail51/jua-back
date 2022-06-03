const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const id = `mongodb+srv://admin:${process.env.PASS}@cluster0.ze7pg9p.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(id);
console.log(id)
const PORT = process.env.PORT || 80;
const commentaryRouter = require("./controllers/commentary");
const profilHelpersRouter = require("./controllers/profilHelpers");
const blockedRouter = require("./controllers/blockedUsers");
const offerRouter = require("./controllers/offersControllers");
const registerRouter = require("./controllers/register");
const profilHelpedsRouter = require("./controllers/profilHelped");
const session = require('express-session')
const passport = require('./config/passport')
app.use(session({
  secret: 'ok', 
  resave: false, 
  saveUninitialized: false
}))

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/comment", commentaryRouter);
app.use("/profil/helpers", profilHelpersRouter);
app.use("/profil/helpeds", profilHelpedsRouter);
app.use("/blockUser", blockedRouter);
app.use("/offers", offerRouter);
app.use("/register", registerRouter);

app.listen(PORT || 8080, () => {
  console.log("the server is listening on port : ", PORT);
});
