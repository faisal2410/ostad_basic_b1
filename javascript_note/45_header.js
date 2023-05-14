// HTTP headers are an important part of the HTTP protocol, used for passing additional information between the client and server during an HTTP transaction.In JavaScript, you can set and read HTTP headers using the XMLHttpRequest object or the Fetch API.

// HTTP headers can be divided into two categories: request headers and response headers.

// Request headers are sent by the client to the server as part of an HTTP request, and typically contain information about the client, the request itself, and any data being sent along with the request.Some commonly used request headers include:

// Accept: Specifies the MIME types of the data the client is willing to accept in response.
// Authorization: Contains the authentication credentials for accessing the requested resource.
// Content - Type: Specifies the MIME type of the data being sent with the request.
// User - Agent: Identifies the client software being used to make the request.

// Here's an example of setting a custom request header using the Fetch API:


// fetch('https://example.com/api/data', {
//     headers: {
//         'Authorization': 'Bearer my-token',
//         'Content-Type': 'application/json'
//     }
// })

// Response headers are sent by the server to the client as part of an HTTP response, and typically contain information about the server, the response itself, and any data being sent along with the response.Some commonly used response headers include:

// Access - Control - Allow - Origin: Specifies the domains that are allowed to access the resource.
// Content - Type: Specifies the MIME type of the data being returned in the response.
// Set - Cookie: Sets a cookie on the client's browser.

// Here's an example of reading a response header using the Fetch API:


// fetch('https://example.com/api/data')
//     .then(response => {
//         const contentType = response.headers.get('Content-Type');
//         console.log(`Response content type: ${contentType}`);
//     });

// HTTP headers play an important role in web development, and understanding how to work with them in JavaScript can be useful when building web applications that communicate with APIs or other web services.