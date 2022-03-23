const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const auth = require('../controller/authController')

 router.get('/',(req,res)=> res.render('init', {error: false, body:{}}))
router.get('/register', (req,res)=> res.render('regist', {error: false, body:{}}))
router.get('/logged', auth.verifyLog, (req,res)=>{
    res.render('logged')
})


router.post('/register',express.urlencoded({extended: true }), userController.register)
router.post('/login',express.urlencoded({extended: true }), userController.login)

module.exports = router; 
