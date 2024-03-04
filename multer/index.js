const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');
const mongoose = require('mongoose');
const multer  = require('multer')
const cloudinary=require('cloudinary');          
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const upload = multer()
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
    try{
        let result=await cloudinary.uploader.upload(path,
        { public_id: "olympic_flag" }, 
        function(error, result) {console.log(result); });
        const newImage=new Image({filename:filename,filepath:result.ur});
        await newImage.save();
    
        console.log(result);
        res.send("File uploaded :)");
    }
    catch(error){
        console.log(error);
    }
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