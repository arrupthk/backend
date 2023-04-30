const http = require('http');
/*
const server = http.createServer((req,res)=>{
    console.log(req.url, req.headers, req.method)
    //This line logs the url, headers, and method properties of the req (request) object to the console. 
    //These properties provide information about the incoming request. The url property represents the URL path
    // requested by the client, the headers
     //property contains the headers sent with the request, and the method property indicates the HTTP method
     // used (e.g., GET, POST, etc.).
});

server.listen(4500)*/

const server = http.createServer((req,res)=>{
    console.log(req.url, req.headers, req.method)
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head> <title> my first page</title> </head>')
    res.write('<body>  hello my node js program </body>')
    res.write('</html>')
    //These lines use the res.write() method to write HTML content to the response body.
    // They write the HTML tags and content to be sent to the client.
     //In this case, a basic HTML page structure is created with a title and a body that says "Hello, my Node.js program!".
    res.end();
});
    server.listen(4500)

    /*	By employing this event-driven architecture, Node.js enables efficient handling of multiple tasks, 
    responsiveness to events, and smooth execution of asynchronous operations, making it well-suited for building 
    scalable and responsive applications.

Event Registration: In Node.js, you start by registering event listeners for specific events. You specify which events
 you're interested
 in and what should happen when those events occur.
Event Emission: As your program runs, various events occur. These can be triggered by user actions
 (e.g., button clicks), system events

 (e.g., file loading completed), or other asynchronous operations (e.g., network requests finishing). When an event occurs,
  the corresponding event emitter emits the event.

Event Loop: Node.js has an event loop that continuously checks for emitted events. It keeps track of 
registered event listeners and their associated events.

Event Handling: When an event is emitted, the event loop identifies the corresponding event listener
 and invokes its associated function. This allows you to respond to the event with the desired logic or actions.

Asynchronous Nature: Node.js excels at handling asynchronous operations. Instead of waiting for 
a task to complete before moving on to the next one, Node.js can register event listeners for completion events.
 This allows it to continue executing other tasks while waiting for the asynchronous task to finish. 
 Once the task completes, the associated event is emitted, and the corresponding event listener is triggered.

2)		Node.js is known for its ability to handle a large number of requests per second, even though
 it operates on a single-threaded event loop. Here are the key factors that contribute to its scalability:

Non-Blocking I/O: Node.js utilizes non-blocking, asynchronous I/O operations. When a request requires
 I/O operations, such as reading from a file or making a network request, Node.js doesn't block the thread. 
 Instead, it delegates the I/O task to the underlying system, allowing the event loop to continue processing
  other requests. This non-blocking nature enables Node.js to efficiently handle a high volume of concurrent
   requests without getting stuck waiting for I/O operations to complete.
   
Event-Driven Architecture: Node.js follows an event-driven architecture, where requests are processed 
asynchronously in response to events. With its event loop, Node.js can handle multiple requests concurrently 
by efficiently switching between them as events occur. This means that while one request is waiting for an I/O 
operation to complete, the event loop can continue processing other requests. By leveraging this architecture,
 Node.js maximizes the utilization of the single thread and ensures optimal performance.

Scalable Ecosystem: Node.js benefits from a rich ecosystem of libraries and frameworks that are designed to 
support scalability. These tools provide features such as clustering, which allows you to create multiple instances
 of your Node.js application and distribute the workload across multiple cores or machines. By utilizing clustering,
  you can take advantage of the available hardware resources and handle a higher number of requests by effectively 
  utilizing multiple threads or processes.

Horizontal Scaling: In addition to utilizing clustering, Node.js applications can be horizontally scaled by deploying
 multiple instances of the application across multiple servers or containers. Load balancers can distribute incoming 
 requests among these instances, ensuring that the workload is evenly distributed and allowing for high availability 
 and scalability.

Efficient Resource Utilization: Node.js is lightweight and optimized for efficiency. By operating on a single thread, 
it requires fewer resources compared to multi-threaded or multi-process server architectures. This efficiency enables 
Node.js to handle a higher number of concurrent connections using the available resources effectively.
Overall, the combination of non-blocking I/O, event-driven architecture, scalable ecosystem, and efficient resource
 utilization allows Node.js to effectively handle a large number of requests per second, making it a popular choice 
 for building high-performance, scalable web applications.



3)process.exit() is like pressing the "stop" button on a machine. When you call process.exit() in your Node.js program, 
it immediately stops the program's execution and shuts it down.

It's useful for situations where you want to forcefully end your program, like when encountering a critical error
 or when a specific condition is met. For example, if you detect that an essential resource is unavailable, you might
  call process.exit() to stop the program instead of continuing with incomplete data.



4)req.url: This property contains the URL (Uniform Resource Locator) of the incoming HTTP request.
 It represents the path and query parameters specified by the client when making the request. For example, if a 
 client sends a request to http://example.com/users?id=123, then req.url would contain "/users?id=123". It includes 
 the path and any query parameters present in the URL.
req.header: This property contains the HTTP headers sent by the client as part of the request. HTTP headers are key-value 
pairs that provide additional information about the request or the client. Some common headers include Content-Type, User-Agent, 
Authorization, and Cookie. The req.header object typically allows you to access these headers by their key names. For example,
 req.header('Content-Type') would return the value of the Content-Type header.
req.method: This property contains the HTTP method used in the request, such as GET, POST, PUT, DELETE, etc. The method indicates
 the type of action the client wants to perform on the specified resource. For example, if the client sends a GET request,
  req.method would contain the string "GET". Similarly, for a POST request, it would contain "POST".
*/