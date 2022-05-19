const express = require("express");
const router = express.Router();
var helpersModel = require("../Models/HelpersModel");
const { route } = require("./commentary");


router.post("/",async function(req, res, next){
     const body = req.body
     console.log("body",body)
     const newHelpers = new helpersModel(body)
     try {
          const helpers = await newHelpers.save()
          res.json(helpers)
     } catch (error) {
          console.error(err)
          res.status(500).send("internal server error")
          
     }

})

router.get("/:id",function(req, res, next){
     const id = req.params.id 
     helpersModel.findById(id).exec().then(data=>{
          res.json(data)
     })
     console.log("console log d'helpersModel",helpersModel)
                                                             
})




module.exports = router