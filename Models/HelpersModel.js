const mongoose = require('mongoose')

const helpersSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number,
    phone : String,
    mail : String,
    ratings : [Number],
    profile_picture : String,
    skills : [String],
    city : String,
    zipcode : Number,
    adress : String,
    points : Number,
    history : [String],
})

const helpersModel = new mongoose.model("helpers",helpersSchema)

module.exports = helpersModel