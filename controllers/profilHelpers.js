const express = require("express");
const router = express.Router();
var UserModel = require("../Models/UserModel");
const { route } = require("./commentary");


router.post("/",async function(req, res, next){
     const body = req.body
     console.log("body",body)
     const newHelpers = new UserModel(body)
     try {
          const helpers = await newHelpers.save()
          res.json(helpers)
     } catch (error) {
          console.error(error)
          res.status(500).send("internal server error")
     }
})

router.get("/:id",function(req, res, next){
     const id = req.params.id 
     UserModel.findById(id).exec().then(data=>{
          res.json(data)
     })
     console.log("console log d'helpersModel",UserModel)                                                        
})


module.exports = router