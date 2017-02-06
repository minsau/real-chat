'use strict'

const http = require('http');
const port = process.env.PORT || 8080;
const fs = require('fs');

const server = http.createServer();

server.on('request', onRequest);
server.on('listening', onListening);

server.listen(port);


// A partir de aqui van todas las funciones 

function onRequest(req, res){
  fs.readFile('public/index.html', function(err, file){
    if(err){
      //console.log("Hubo error");
      return res.end(err.message);
    }
    res.end(file);
  });
}

function onListening() {
  console.log('Servidor escuchando en ' + port);
}