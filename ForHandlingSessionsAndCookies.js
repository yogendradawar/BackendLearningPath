//#5


const express = require('express');
const app = express();

        app.use(express.json());
        app.use(express.urlencoded({extended : true}));

        app.get("/",function(req,res){
            res.send("champion mera anju");
        })

        app.get("/about",function(req,res){
            res.send("Mujhe call kiya kya mai about hu");
        });

        app.get("/profile",function(req,res,next){
            return next(new Error("something went Wrong"));
        })

        //Error Handling always use in the last

        app.use((err,req,res,next) => {
            console.error(err.stack)
            res.status(500).send('something went wrong, we don`t any idea');
        })
        
        app.listen(3000);