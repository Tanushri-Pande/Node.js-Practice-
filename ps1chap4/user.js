const http=require('http');

const server= http.createServer((req,res)=>{
  console.log(req.url,req.method);
 

   if(req.url==='/Home'){
     res.write('<h1>Welcome to Home</h1>');
     return res.end();
   }else if(req.url==='/Women'){
    res.write('<h1>Welcome to Women Section</h1>');
    return res.end();
   }else if(req.url==='/Men'){
    res.write('<h1>Welcome to Men Section</h1>');
    return res.end();
   }else if(req.url==='/Kids'){
    res.write('<h1>Welcome to kids Section</h1>');
    return res.end();
   }else if(req.url==='/Cart'){
    res.write('<h1>Welcome to Cart Section</h1>');
    return res.end();
   }

    res.write(
   
       `<html lang="en">
       <head>
         <title>Myntra</title>
       </head>
       <body>
         <head>
           <nav>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Men">Mens</a></li>
                <li><a href="/Kids">Kids</a></li>
                <li><a href="/Cart">🛒</a></li>
            </ul>
          </nav>
         </head>
       </body>
    </html> `
  );
  
   res.end();
});

const PORT=3001;
server.listen(PORT, ()=>{
    console.log( `Server running on address http://localhost:${PORT}`)  ;
});