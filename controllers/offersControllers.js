const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const OffersModel = require("../Models/OffersModel");
const UserModel = require("../Models/UserModel");
const ObjectId = require('mongoose').Types.ObjectId; 

router.get("/", async (req, res, next) => {
  OffersModel.find({is_active:true}).populate("created_by")
    .exec()
    .then((offers) => {
      console.log("offers", offers);
      res.json(offers);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
});

router.get("/history/:id", async (req, res, next) => {
  OffersModel.find({is_active:false, accepted_by:req.params.id}).populate("created_by")
    .exec()
    .then((offers) => {
      console.log("offers", offers);
      res.json(offers);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
});


router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("id", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("The id needs to be an ObjectId");
  }
  OffersModel.findById(id)
  .populate('created_by')
    .exec()
    .then((offers) => {
      console.log(offers);
      res.json(offers);
    })
    .catch((err) => res.status(500).send("error"));
});
router.get("/user/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("id", id);

  OffersModel.find({"created_by":id})
  .populate('created_by')
    .exec()
    .then((offers) => {
      console.log(offers);
      res.json(offers);
    })
    .catch((err) => res.status(500).send("error"));
});
router.post("/", async (req, res, next) => {
  const body = req.body;
  console.log("body", body);
  const newOffer = new OffersModel(body);

  try {
    const offers = await newOffer.save();
    res.json(offers);
  } catch (err) {
    console.error(err);
    res.status(500).send("error");
  }
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  OffersModel.findByIdAndDelete(id)
    .exec()
    .then((offerDeleted) => {
      res.json(offerDeleted);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});
router.put("/:id",(req, res, next)=>{
  const offerId = req.params.id;
  const filter = {"_id":offerId};
  const update = { accepted_by:req.body.accepted_by, 
                      is_active:false};
  OffersModel.findOneAndUpdate(filter, update,{new : true}).exec().then(data=>{
    console.log(data.accepted_by)
    UserModel.findOne({_id:data.accepted_by}).then(ok=>{
      console.log("ok", ok)
      const actualPoints = ok.points
      const filter = {"_id":data.accepted_by};
      const update = { points: actualPoints + data.points };
      UserModel.findOneAndUpdate(filter, update).exec().then(user=>{
        res.json(data)
      })
    })
  })
})
router.get("/type/:type", async (req, res, next) => {
  OffersModel.find({offerType:req.params.type, is_active:true}).populate("created_by")
    .exec()
    .then((offers) => {
      res.json(offers);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
});
module.exports = router;
