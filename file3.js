const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(__dirname, 'message2.txt');

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Enter Message</title></head>');
    res.write('<body><h1>Hello, my Node.js program!</h1>');
    res.write('<form action="/trial" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write('</form></body></html>');
    return res.end();
  }

  if (url === '/trial' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { //In Node.js, an event listener is a function that is executed in response to a 
        //specific event being triggered. An event is an action or occurrence that can be detected or observed within a program.
     // It allows you to write code that responds to various events asynchronously, without blocking the execution of the program.
       // In the provided code, req.on('data', (chunk) => { ... }) is an example of setting up an event listener.
    // Here, req represents the request object, and on() is a method provided by Node.js that allows you to attach event 
    //listeners to objects.
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.get('message'); // here message is the name of html
      fs.writeFile(filePath, message, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/html');
          res.end('<html><head><title>Server Error</title></head><body><h1>500 Server Error</h1></body></html>');
        } else {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        }
      });
    });
  } else if (url === '/message2.txt') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><head><title>Not Found</title></head><body><h1>404 Page Not Found</h1></body></html>');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><head><title>Not Found</title></head><body><h1>404 Page Not Found</h1></body></html>');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});