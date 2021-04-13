// const http = require('http'); 

// http.createServer(function (req, res) { 
//   res.writeHead(200, {'Content-Type': 'text/plain'}); 
//   res.end('Hello, World!\n'); 
// }).listen(8124, '127.0.0.1'); 
// console.log('Server running at http://127.0.0.1:8124'); 

'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);