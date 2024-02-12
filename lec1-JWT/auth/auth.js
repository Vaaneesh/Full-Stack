const jwt=require("jsonwebtoken");
const secretKey="shhhh";

module.exports.createWebToken=(user)=>{
    return jwt.sign(user,secretKey,{expiresIn:"24h"})
}