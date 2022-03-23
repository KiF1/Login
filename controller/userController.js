const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {loginValidate, registerValidate} = require('./validated')

const userController ={
    register: async function (req, res){
const {error} = registerValidate(req.body)
;
if(error){
   return  res.status(400).send(error.message);
}


const selectedUser = await User.findOne({email:req.body.email})
    if(selectedUser) return res.status(400).send("Email Já listado")

const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password)
      }) 
      try{
          const savedUser = await user.save()
          if(savedUser){
            res.redirect('/');
          }
      }catch(error){
             res.status(400).send(error)
      }
    },
    login: async function (req, res){
      const {error} = loginValidate(req.body)
if(error){
  return res.status(400).render('init', {error, body: req.body});
  //send(error.message)
}
      const selectedUser = await User.findOne({email:req.body.email})
      if(!selectedUser) return res.status(400).render('init', {error:{message: "Email or Password incorrect"}, body: req.body})
      //render('init', {error{message: "Email or Password incorrect"}, body: req.body})
      
      const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
      if(!passwordAndUserMatch){
        return res.status(400).render('init', {error:{message: "Email or Password incorrect"}, body: req.body})
        //render('init', {error, body: req.body})
      }

      const token = jwt.sign({_id: selectedUser.id, admin: selectedUser.admin}, process.env.TOKEN_SECRET)
      res.cookie('secureCookie', JSON.stringify(token), { secure: true, httpOnly: true })
      res.redirect('/logged')

    }

}


module.exports = userController
