// Shamelessly swiped from https://github.com/metafloor/bwip-js/blob/master/server.js

// Simple HTTP server that renders bar code images using bwip-js.
var http   = require('http');
var bwipjs = require('bwip-js');

http.createServer(function (req, res) {
  // If the url does not begin /?bcid= then 404.  Otherwise, we end up
  // returning 400 on requests like favicon.ico.
  if (req.url.indexOf('/?bcid=') != 0) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('BWIP-JS: Unknown request format.', 'utf8');
  } else {
    bwipjs(req, res);
  }
}).listen(3030)

console.log('Running barcode service on port 3030');
