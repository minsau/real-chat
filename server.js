'use strict'

const http = require('http');
const port = process.env.PORT || 8080;
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', onRequest);
server.on('listening', onListening);

server.listen(port);


// A partir de aqui van todas las funciones 

function onRequest(req, res){

  let index = path.join(__dirname,'public', 'index.html');
  res.setHeader('Content-type','text/html');
  let rs = fs.createReadStream(index);
  rs.pipe(res);

  rs.on('error', function(err){
    res.end(err.message);
  })
}

function onListening() {
  console.log('Servidor escuchando en ' + port);
}