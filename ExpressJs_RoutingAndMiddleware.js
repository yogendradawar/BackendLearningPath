//#4


    const express = require('express');
    const app = express();

    //Routes create krna 

    // app.get(route, requestHandler); //reuestHandler -- middleware

    app.get("/",function(req,res){
        res.send("champion mera anju");
    })


    app.get("/profile",function(req,res){
        res.send("champion uska coach");
    })

    app.listen(3000);