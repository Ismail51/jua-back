const passport = require('passport')
const LocalStrategy  = require('passport-local')
const mongoose = require('mongoose')
const UserModel = require('../Models/UserModel')


passport.use(new LocalStrategy(
  {
    usernameField:"mail", 
    passwordField:"password"
  },
async (email, password, done)=> {
  const user = await UserModel.findOne({mail:email, password:password})
  if (!user) {
    return done(null, false)
  }
    return done(null, user)
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user)=>{
    done(err, user);
  });
})
module.exports = passport
