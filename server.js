'use strict'

const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer(
(req, res) => {
  res.end('Hola io.js');
});

server.listen(port, () => {
  console.log('Servidor escuchando en ' + port);
});