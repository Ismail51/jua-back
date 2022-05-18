const mongoose = require('mongoose')

const HelpedSchema = new mongoose.Schema({
    firstnamne : String,
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
})

const helpedModel = new mongoose.model("helped",HelpedSchema)

module.exports = helpedModel