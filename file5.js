
// what is an event loop?
//An event loop is a programming construct used in event-driven systems to handle and manage the flow of events or tasks.
// It is commonly found in programming frameworks and environments that support 
//asynchronous or non-blocking operations, such as JavaScript in web browsers or Node.js on the server-side.

//The event loop operates by continuously checking for and dispatching events in a loop. These events can include user
// interactions (such as mouse clicks or keyboard inputs),
// network operations (such as receiving data from a server), or timer events (such as timeouts or intervals).

//Initialization: The event loop starts by initializing itself and any necessary resources.
/*
Event Registration: As the program executes, it registers various events or tasks to be handled by the event loop.
These registrations typically include callback functions or event handlers that will be executed when the events occur.

Event Queue: When an event or task is triggered, it is added to an event queue. This queue holds the pending events that are 
waiting to be processed.

Event Dispatch: The event loop continuously checks the event queue for any pending events. If there are events in the queue, 
it takes the first event and dispatches it for processing.

Event Handler Execution: The event loop calls the corresponding event handler or callback function associated with the event.
 This allows the program to respond to the event and execute the necessary code.

Blocking vs. Non-blocking Operations: In some cases, an event handler may perform a blocking operation, such as reading a large 
file or making a time-consuming network request. To prevent the event loop from being blocked and unresponsive, these operations 
are often handled asynchronously or in separate threads or processes.

Completion and Cleanup: After the event handler finishes executing, the event loop moves on to the next event in the queue,
 repeating the process. If there are no more events in the queue, the event loop may pause or wait for new events to arrive.

Termination: The event loop continues executing until a termination condition is met, such as the program ending or an explicit
 instruction to stop the event loop.*/

 