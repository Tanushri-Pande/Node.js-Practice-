const {sumHandler}=require('./sum');

const reqHandler=(req,res)=>{
    console.log(req.url,req.method);
    if(req.url === '/'){
         res.write(
    `
        <html lang="en">
          <head>
              <title>Home</title>
         </head>
        <body>
          <h1>Welcome to Home Page</h1>
            <nav>
              <ul>
               <li><a href="/calculator">Calculator</a></li>
              </ul>
            </nav>
        </body>
        </html> `
     );
     return res.end();
    }
    else if(req.url==='/calculator'){
        res.write(
            `<html lang="en">
              <head>
   
               <title>Welcome to Calculator!!</title>
              </head>
              <body>
               <form  action="/calculator-result" method="POST">
                 <input type="text" id="first" name="first" placeholder="FristNUm">
                 <input type="text" id="Second" name="Second" placeholder="SecondNUm">
                 <button type="submit" >Sum</button>
               </form>
              </body>
            </html>`
        );
        return res.end();
    }else if(req.url.toLowerCase()==='/calculator-result'  && req.method=='POST'){
       return sumHandler(req,res);
    }
   // for handeling page that does not exist if u put route that does not exist 
     // redirect to the home page.
    res.write(`
    <html>
      <head><title>Practise Set</title></head>
      <body>
        <h1>404 Page Does not Exist</h1>
        <a href="/">Go To Home</a>
      </body>  
    <html>  
   `);    
  return res.end();
  
}

exports.reqHandler=reqHandler;