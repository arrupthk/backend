//taskkill /F /IM node.exe


//v8 is a javascript engine- written in c++
// it takes JS code from browser and compiles it to machine code
//what is node js?- it is a java script runtime
// creates server and handles incoming requests
//connect to database
//return response in html and json formats
// why we use it?


//REPL- read, evaluate, print and loop from the input

// fat arrow function and this keyword?

// how web works?
//-> browser-> url -> domain name look up-> browser and domain name send request -> request reaches server 
//-> we write the code that runs on 
// that server-> it also communicates with database-> then response is sent back to clinent in form of html, file or json

// http- protocol for transfrerring data that is understood bybrowser and server


// core modules- http- helps in launching server and sending request
// https- launch an ssl server(secure)

//using http-
const http = require('http');
//  this imports built in http from node module to create functionality for http server
/*function request (req,res)
{

}
http.createServer(request) */
// create server is a function for server creation and it takes request listener as an argument.
// request listener is a function that will execute every incoming request

//here we can also use annonymus function like

http.createServer(function(req,res)
//the createServer() method from the http module to create an HTTP server. The createServer() method
// takes a request listener function as an argument. In this code, an anonymous function is passed as the request listener.
{
    console.log("my name is sona")
}).listen(4000)
//The request listener function is followed by the listen(4000) method, which is chained to the createServer() call. 
//It tells the server to start listening on port 4000 for incoming HTTP requests.
//In summary, the code sets up a basic HTTP server using Node.js. Whenever a request is made to the server, 
//the request listener function is executed, which logs a message to the console. The server listens on port 4000.
/*

1) internet is collection of inter connected networks.it operates via protocols. the Internet Protocol (IP), which assigns 
//a unique numerical address to each device connected to the internet. This address, known as an IP address, allows devices
 //to identify and communicate with each other. When we send a request or access a website, data is broken down into packets 
// and sent through routers to its destination. The packets are reassembled, allowing us to access the information



2 and 3)Node.js, a JavaScript runtime environment, has several core modules that provide essential functionality for
 building applications.

//Node.js has core modules that provide essential functionality. Some of these modules include HTTP for server and client 
//functionality, FS for file system operations, Path for manipulating file paths, Events for event-driven programming, Util 
//for utility functions, Crypto for cryptographic operations, and Streams for handling streaming data. These modules help developers 
build powerful applications using Node.js.



4)Relative Path: A path that specifies the location of a file or directory relative to the current working directory.

Absolute Path: A path that provides the complete and exact location of a file or directory starting from the root directory
 or drive letter.

5)createServer function sets up a server in Node.js, defining how incoming requests are handled and responses are generated.
 It establishes a connection between your application and clients, enabling communication and interaction over the internet.

When we invoke createServer, provide a callback function that defines how the server should handle each incoming request. 
This callback function, often referred to as the request handler, specifies the logic for processing the request and generating 
an appropriate response



6)they are defined inline, typically within the context where they are used, without the need for a separate function 
declaration. They are often used in situations where a function is required temporarily or as a callback function.

let sum = function (a, b) {

  return a + b;

};

console.log(sum(2, 3));



7)The server.listen() function in Node.js is like flipping the switch to turn on a server. It tells the server to start
 listening for incoming connections from clients.Once the server is listening, clients can send their requests to the server 
 and expect a response.

By calling server.listen(), we specify which "address" or network location the server should listen on.


*/