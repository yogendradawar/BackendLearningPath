const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/",(req,res) =>{
    res.send('Good Afternoon');
});

app.get("/create",async (req,res) =>{
   let user = await userModel.create({
    username : "yogendra",
    age : 23,
    email : "yogendra@gmail.com",
   })
   res.send(user);
});


app.get("/post/create",async (req,res) =>{
    let post = await postModel.create({
        postdata:"hello saare log kaise ho",
        user : "6630b0040179d06c4511d3b7",
    })

    let user = await userModel.findOne({_id:"6630b0040179d06c4511d3b7"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
 });



app.listen(3000);