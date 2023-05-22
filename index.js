const express=require('express');
const router = require('./routes');
const db=require('./config/mongoose');
//require passport and jwt
const passport=require('passport');
const passportStrategy=require('./config/passport');

const bodyParser=require('body-parser');
const app=express();

const port=8000;




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(router);
app.listen(port,function(err){
    if(err){
        console.log("error in starting the server",err);
    }

    console.log("Server is running on port",port);
})