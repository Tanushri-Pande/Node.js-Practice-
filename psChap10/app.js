//Core module
const path=require('path');

//external module
const express=require('express');

//local module
const homeRouter=require("./routes/homeRouter");
const userRouter=require("./routes/userRouter");
const rootDir=require("./utils/pathUtils");

const app=express();


app.use(express.urlencoded());
app.use(homeRouter);
app.use("/user",userRouter);


app.use((req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','404.html'));
});

const PORT=3000;
app.listen(PORT, ()=>{
   console.log(`Server running on address http://localhost:${PORT}`) ;
});