const express=require('express');
const app=express();
const path=require("path")
const mongoose=require("mongoose");
const User=require("./model/user");
const bcrypt = require('bcrypt');
const saltRounds = 10; 
const {createWebToken,verifyToken}=require("./auth/auth");
const cookieParser=require("cookie-parser");

app.use(cookieParser()); //to parse cookies so that we can use as objects to get key values
app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'hbs');
app.get("/",verifyToken,(req,res)=>{
    res.render("home");
})
app.get("/register",(req,res)=>{
    res.render("register");
})
app.post("/register",async(req,res)=>{
    const{email,password}=req.body;
    let hashPassword=await bcrypt.hash(password,saltRounds);
    let newUser=new User({email,password:hashPassword});
    await newUser.save();
    res.json(newUser);
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    let user=await User.findOne({email});
    if(!user){
        res.send("No user found!!!!");
    }
    bcrypt.compare(password,user.password).then(function(result){
        if(result){
            let token=createWebToken(user.toJSON());
            res.cookie("token",token);
            res.json({token});
        }
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/g26Jwt").then(()=>{
    app.listen(3444,()=>{
        console.log("Server started at port 3444");
    })
})