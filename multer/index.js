const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Image=require("./model/image");

app.use(express.static(path.join(__dirname, 'static')));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'hbs');

app.get("/upload",(req,res)=>{
    res.render("form");
})
app.post("/upload",upload.single('img'),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const{filename}=req.body;
    const {path}=req.file;
    const newImage=new Image({filename:filename,filepath:path});
    await newImage.save();
    res.send("File uploaded :)");
})
app.get("/blog",async(req,res)=>{
    const images=await Image.find({});
    res.render("blog",{images});
})
mongoose.connect("mongodb://127.0.0.1:27017/multerG26").then(()=>{
    app.listen(3444,()=>{
        console.log("--- Server started at port 3444 ---");
    })
})