const express = require("express");
const router = express.Router();
mongoose.connect('mongodb://localhost:27017/JUA')
const helpedModel = require("../Models/HelpedModel")


router.post("/",async function(req, res, next){
    const body = req.body
    console.log("body",body)
    const newHelped = new helpedModel(body)
    try {
         const helped = await newHelped.save()
         res.json(helped)
    } catch (error) {
         console.error(err)
         res.status(500).send("internal server error")
         
    }
    

})

router.get("/:id",function(req, res, next){
    const id = req.params.id 
    helpedModel.findById(id).exec().then(data=>{
         res.json(data)
    })
    console.log("console log d'helpersModel",helpedModel)
                                                            
})




module.exports = router