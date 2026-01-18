//core Module
const path=require('path');

// External Module
const express=require('express');
const hostRoute=express.Router();

//local module
const rootdir=require("../utils/pathUtils");

// "/host/add-Home"
hostRoute.get("/add-Home",(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','addHome.html'));
});
// "/host/add-Home"
// res.sendFile(path.join(__dirname,'../','views','homeAdded.html'));
//replaced with rootdir
hostRoute.post("/add-Home",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','homeAdded.html'));
});

module.exports=hostRoute;
