const express = require("express");
const router = express.Router();
mongoose.connect('mongodb://localhost:27017/JUA')


app.use(cors())
app.use(express.json())