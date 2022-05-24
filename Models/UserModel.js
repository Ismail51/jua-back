const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    age : Number,
    phone : String,
    mail : String,
    blocked_users : [String],
    actual_offers : [String],
    card : String,
    profile_picture : String,
    city : String,
    zipcode : Number,
    adress : String,
    skills : [String],
    history : [String],
    ratings : [Number],
    points : Number,
    password:String,
})

const UserModel = new mongoose.model("user",userSchema)

module.exports = UserModel