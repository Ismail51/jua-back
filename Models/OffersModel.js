const mongoose = require('mongoose')

const offersSchema = new mongoose.Schema({
    created_by : [{
        type : mongoose.Types.ObjectId,
        ref : "helped"
    }],
    accepted_by :[{
        type : mongoose.Types.ObjectId,
        ref : "helpers"
    }],
    date : Date,
    duration : Number,
    points : Number,
    type : String,
    is_active : Boolean,
})

const offersModel = new mongoose.model("offers",offersSchema)

module.exports = offersModel