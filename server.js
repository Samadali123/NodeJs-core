const http = require('node:http');


const server = http.createServer(function(req, res){
    res.end( "created a first server using http ");
})

server.listen(8000, function(){
    console.log("creating a server using http.");
});







