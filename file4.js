
/*
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
const url= req.url;
const method = req.method;
if(url==='/')
{
res.write('<html>')
res.write('<head> <title> enter message </title> </head>')
res.write('<body>  hello my node js program <br> <form action="/message" method ="POST"> <input type="text" name="guddu"> <button type = "submit"> send </button> </body>');
res.write('</html>')
 return res.end();
}
if(url==='/message' && method=== 'POST')
{
    const body = [];
    req.on('data',(chunk) =>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(parsedBody);
        fs.writeFileSync('message2.txt',message );

    })
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
}
res.setHeader('Content-type', 'text/html');
res.write('<html>');
res.write('<head> <title> my first page</title> </head>');
res.write('<body>  hello again my node js program </body>');
res.write('</html>');
res.end();
});
server.listen(4000);
*/

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
const url= req.url;
const method = req.method;
if(url==='/')
{
res.write('<html>')
res.write('<head> <title> enter message </title> </head>')
res.write('<body>  hello my node js program <br> <form action="/message" method ="POST"> <input type="text" name="guddu"> <button type = "submit"> send </button> </body>');
res.write('</html>')
 return res.end();
}
if(url==='/message' && method=== 'POST')
{
    const body = [];
    req.on('data',(chunk) =>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(parsedBody);
        fs.writeFileSync('message2.txt',message, err =>{
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
        });
    });
}
res.setHeader('Content-type', 'text/html');
res.write('<html>');
res.write('<head> <title> my first page</title> </head>');
res.write('<body>  hello again my node js program </body>');
res.write('</html>');
res.end();
});
server.listen(4000);
