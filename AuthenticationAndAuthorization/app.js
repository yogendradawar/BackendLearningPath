const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/",function(req,res){
    let token = jwt.sign({email : "yogi@gmail.com"} , "secret");
    res.cookie(token);
    res.send("done");
});

app.get("/read",function(req,res){
    let data = jwt.verify(req.cookies.token , "secret");
    console.log(data);
    res.send("done");
})



app.listen(3000);