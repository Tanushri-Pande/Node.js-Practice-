const http=require('http');
const {reqHandler}=require('./reqHandler');

const server=http.createServer(reqHandler);

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server i running on address http://localhost:${PORT}`);
});