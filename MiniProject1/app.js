const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.render("index");
})


app.post('/register',async (req,res)=>{
    let {email, password, username, name, age} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(500).send("User already register");

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async (err,hash) =>{
            let user = await userModel.create({
                username,
                name,
                email,
                password : hash,
                age
            });

            let token = jwt.sign({email : email , userid : user._id},"private");
            res.cookie("token",token);
            res.send("registered");
        })
    })
})

app.listen(3000);