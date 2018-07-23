const http = require('http');
const fs = require('fs')

let index = '';
fs.readFile('index.html', 'utf8', (err, data) => {
  index = data;
})

const hostname = '0.0.0.0';
const port = 80;

// const hostname = '127.0.0.1';
// const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
