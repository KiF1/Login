const express = require('express');
const router = express.Router();
const auth = require('../controller/authController')

router.get('/', (req,res)=>{
    if(req.user.admin){
    res.send('apenas adm ve')
    }else{
    res.status(401).send('acess Denied')
    }
})
router.get('/free', auth.verifyLog, (req,res)=>{
    res.send('Dado visto por quem está logado')
})


module.exports = router