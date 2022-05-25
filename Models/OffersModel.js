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
    is_active: {
        type: Boolean,
        default: true
      },
    duration : Number,
    points : {
        type:Number,
        default:10
    },
    offerType : String,
    description:String
})

const offersModel = new mongoose.model("offers",offersSchema)

module.exports = offersModel