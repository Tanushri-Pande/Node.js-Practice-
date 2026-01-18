//core module
const path=require('path');

//external module
const express=require('express');
const userRouter=express.Router();

//local module
const rootDir=require("../utils/pathUtils");

userRouter.get("/contact-us",(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','addContact.html'));
});
userRouter.post("/contact-us",(req,res,next)=>{
    console.log("hello from us");
    console.log(req.body);
  res.sendFile(path.join(rootDir,'views','contactAdded.html'));
});

module.exports=userRouter;