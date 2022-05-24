const express = require("express");
const router = express.Router();
var UserModel = require("../Models/UserModel");
const passport = require('../config/passport')

const  checkIfExist = async (req, res, next)=>{
    console.log(req.body)
    const result = await UserModel.find({email:req.body.email})
    if(result.length){
       res.status(409).json('ca existe deja') 
    }else{
        next()
    }
}

router.post('/', 
        checkIfExist, 
        (req, res, next)=>{
            console.log('c good')
            var newUser = req.body
            newUser.profilePicture = 'http://localhost:4000/uploads/ok.png'
            const user = new UserModel(newUser)
            user.save()
            res.json(req.body)
})


router.post('/auth/login', 
passport.authenticate('local'),
(req, res) => {
  if (req.user) {
    req.logIn(req.user, (err) => {
        res.status(200).json(req.user)
      })
    }else{
      res.json("eh no")
    }
})


router.get('')




module.exports = router