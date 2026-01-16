const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("First dummy middleware",req.url,req.method);
    next();
});

app.use((req,res,next)=>{
    console.log("Second Dummy middleware",req.url,req.method);
    next();
})

// app.use((req,res,next)=>{
//      console.log("Third Dummy middleware",req.url,req.method);
//      res.send("<h1> welcome to middlewares</h1>")
// })

// when app.use ha res.send after that any middleware post , get will not work
app.get("/",(req,res,next)=>{
 console.log("Handels / path",req.url,req.method);
res.send("<h1> welcome to middlewares</h1>");
});

app.get("/contact-us",(req,res,next)=>{
 console.log("Handels /contact-us path",req.url,req.method);
res.send(`
    <h1> Please give your details here</h1>

    `);
});

const PORT=3000;
app.listen(PORT, ()=>{
   console.log(`Server running on address http://localhost:${PORT}`) ;
});