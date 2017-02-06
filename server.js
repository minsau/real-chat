'use strict'

const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer();

server.on('request', onRequest);
server.on('listening', onListening);

server.listen(port);


// A partir de aqui van todas las funciones 

function onRequest(req, res){
  res.end('Hola io.js\n');
}

function onListening() {
  console.log('Servidor escuchando en ' + port);
}