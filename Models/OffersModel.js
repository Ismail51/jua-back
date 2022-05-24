const mongoose = require('mongoose')

const offersSchema = new mongoose.Schema({
    created_by : {
        type : mongoose.Types.ObjectId,
        ref : "user"
    },
    accepted_by :{
        type : mongoose.Types.ObjectId,
        ref : "user"
    },
    date: {
        type: Date,
        default: Date.now
      },
    duration : Number,
    points : Number,
    offerType : String,
    is_active : Boolean,
    description:String
})

const offersModel = new mongoose.model("offers",offersSchema)

module.exports = offersModel