const express = require("express");
const router = express.Router();
const UserModel = require("../Models/UserModel")


router.post("/",async function(req, res, next){
    const body = req.body
    console.log("body",body)
    const newHelped = new UserModel(body)
    try {
         const helped = await UserModel.save()
         res.json(helped)
    } catch (error) {
         console.error(err)
         res.status(500).send("internal server error")  
    }  
})

router.get("/:id",function(req, res, next){
    const id = req.params.id 
    UserModel.findOne({"_id":id}).exec().then(data=>{
         console.log(data)
         res.json(data)
    })
    console.log("console log d'helpersModel",UserModel)
                                                            
})




module.exports = router