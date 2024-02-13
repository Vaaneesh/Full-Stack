const jwt=require("jsonwebtoken");
const secretKey="shhhh";

module.exports.createWebToken=(user)=>{
    return jwt.sign(user,secretKey,{expiresIn:"24h"})
}
module.exports.verifyToken=(req,res,next)=>{
    let token=req.cookies.token;
    let decode=jwt.verify(token,secretKey);
    console.log(decode);
    if(decode){
        next();
    }
    res.send("token not valid");
}