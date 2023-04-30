/*const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(__dirname, 'message2.txt');

  if (url === '/') {
    if (method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.get('message'); // here message is the name of html
               fs.writeFile(filePath, message, (err) => {
          if (err) {
            console.error(err);
          }
          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        });
      });
    } else {
      let savedMessage = '';
      try {
        savedMessage = fs.readFileSync(filePath, 'utf8');
      } catch (err) {
        console.error(err);
      }

      res.setHeader('Content-Type', 'text/html');
      res.write('<html><head><title>Enter Message</title></head>');
      res.write('<body><h1>Hello, my Node.js program!</h1>');

      if (savedMessage) {
        res.write('<p>Entered Message: ' + savedMessage + '</p>');
      }

      res.write('<form action="/" method="POST">');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');
      res.write('</body></html>');
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><head><title>Not Found</title></head><body><h1>404 Page Not Found</h1></body></html>');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});*/

//re arranged format

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(__dirname, 'message2.txt');

  if (url === '/') {
    if (method === 'POST') {
      handlePostRequest(req, res, filePath);
    } else {
      handleGetRequest(res, filePath);
    }
  } else {
    handleNotFound(res);
  }
});

function handlePostRequest(req, res, filePath) {
  let body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    const parsedBody = body.toString();
    const message = new URLSearchParams(parsedBody).get('message');

    fs.writeFile(filePath, message, (err) => {
      if (err) {
        console.error(err);
        sendErrorResponse(res);
      } else {
        redirectToHome(res);
      }
    });
  });
}

function handleGetRequest(res, filePath) {
  let savedMessage = '';

  try {
    savedMessage = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error(err);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Enter Message</title></head>');
  res.write('<body><h1>Hello, my Node.js program!</h1>');

  if (savedMessage) {
    res.write('<p>Entered Message: ' + savedMessage + '</p>');
  }

  res.write('<form action="/" method="POST">');
  res.write('<input type="text" name="message">');
  res.write('<button type="submit">Send</button>');
  res.write('</form>');
  res.write('</body></html>');
  res.end();
}

function handleNotFound(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><head><title>Not Found</title></head><body><h1>404 Page Not Found</h1></body></html>');
}

function redirectToHome(res) {
  res.statusCode = 302;
  res.setHeader('Location', '/');
  res.end();
}

function sendErrorResponse(res) {
  res.statusCode = 500;
  res.end();
}

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});