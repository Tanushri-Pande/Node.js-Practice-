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

// when app.use has res.send after that any middleware post , get will not work
//  In Express, app.use() middleware runs sequentially.
// If a middleware sends a response using res.send() and does not call next(), 
// the request lifecycle ends and no further middleware or routes are executed.
// app.use() matches ALL paths by default, so if it sends a response, it ends the
//  request before Express even gets a chance to check your routes.


//You don’t need next in route handlers i.e app.get if you send a response:
// 🟢 Request 1: GET /
//Express matches /
// res.send("Hello") → response sent
// Request lifecycle ends ✅
// ONLY this request stops

// 🟢 Request 2: GET /contact-us
// New request
// Express does route matching again
// / route is NOT matched
// /contact-us route runs normally ✅


app.get("/",(req,res,next)=>{
 console.log("Handels / path",req.url,req.method);
res.send("<h1> welcome to middlewares</h1>");
});

app.get("/contact-us",(req,res,next)=>{
 console.log("Handels /contact-us path",req.url,req.method);
res.send(`
    <h1> Please give your details here</h1>
     <form action="/contact-us" method="POST" >
      <input type="text" name="name" placeholder="Enter your Name" / >
      <input type="text" name="email" placeholder="Enter your email" />
      <button type="submit">Submit </button>
     </form>

    `);
});

app.post("/contact-us",(req,res)=>{
    console.log("Handeling ?contact-us POST req ", req.url,req.method);
    res.send(`<h1>We will contact you soon !!</h1>`)
})



const PORT=3000;
app.listen(PORT, ()=>{
   console.log(`Server running on address http://localhost:${PORT}`) ;
});