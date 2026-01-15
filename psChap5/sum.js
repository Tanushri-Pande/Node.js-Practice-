const  sumHandler=(req,res)=>{
    console.log(" In sum request Handler",req.url);
    // processsing input data in form of chunks
    //then combinig them into a full data in buffer
    // return result by perfroming  operation on data 
    const body=[];

    req.on('data',chunk=>body.push(chunk));
    req.on('end',()=>{
       const bodyStr = Buffer.concat(body).toString();
       const params = new URLSearchParams(bodyStr);
       const bodyObj = Object.fromEntries(params);
      // obj.name {name ueed in input of form }
       const result=Number(bodyObj.first)+Number(bodyObj.Second);
        console.log(result);

        // writng res inside this method 
       res.setHeader('Content-Type', 'text/html');
       res.write(`
        <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
        <html>  
        `); 
    return res.end();
    });


}

exports.sumHandler=sumHandler;