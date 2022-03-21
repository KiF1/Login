require('dotenv').config();;
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true},
    (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Mongo Conectado")
        }
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))
app.use(cookieParser())
app.use('/',express.Router(), userRouter);
app.use('/admin',express.Router(), adminRouter)
app.use(express.static(path.join(__dirname,'/templates')))
app.listen(process.env.PORT, ()=> {console.log("ok")})


