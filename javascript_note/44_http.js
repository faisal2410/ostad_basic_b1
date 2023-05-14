// In the context of the World Wide Web, HTTP(Hypertext Transfer Protocol) messages are the format in which data is sent between web servers and clients(such as web browsers).

// There are two main types of HTTP messages: request messages and response messages.

// Request messages are sent by the client to the server and contain information about what the client wants the server to do.A typical HTTP request message consists of:

// A request line that contains the HTTP method(such as GET, POST, PUT, or DELETE) being used, the URL of the resource being requested, and the HTTP version being used.
// Headers that provide additional information about the request, such as the type of data the client can accept and the encoding used for the request body.
// An optional message body that contains data being sent to the server, such as form data or a JSON payload.
//     Here's an example of an HTTP request message that uses the GET method:


// GET / api / data HTTP / 1.1
// Host: example.com
// Accept: application / json

// Response messages are sent by the server to the client and contain information about the response to the client's request. A typical HTTP response message consists of:

// A status line that contains the HTTP version being used, a numeric status code(such as 200 OK or 404 Not Found), and a brief message explaining the status code.
// Headers that provide additional information about the response, such as the type of data being returned and the encoding used for the response body.
// An optional message body that contains the data being returned to the client, such as HTML or JSON data.
//     Here's an example of an HTTP response message that returns a JSON payload:


// HTTP / 1.1 200 OK
// Content - Type: application / json
// {
//     "data": {
//         "name": "John",
//             "age": 30,
//                 "email": "john@example.com"
//     }
// }

// HTTP messages are the foundation of how web clients and servers communicate, and understanding them is important for web development.