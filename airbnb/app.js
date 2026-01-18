//core module
const path=require('path');
//external module
const express=require('express');

//Local Module
const userRouter=require("./routes/userRouter");
const hostRoute=require("./routes/hostRoute");
const rootdir=require('./utils/pathUtils');

const app=express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRoute);

// res.status(404).sendFile(path.join(__dirname,'views','404.html'));  replace with root dir
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running at address http://localhost:${PORT}`);
})
