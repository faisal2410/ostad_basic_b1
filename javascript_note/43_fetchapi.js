// The Fetch API is a modern JavaScript API for making network requests, such as fetching resources from a server.It is a simpler and more powerful alternative to the older XMLHttpRequest(XHR) API, and it uses promises to handle asynchronous responses.

// Here are the basic steps to use the Fetch API in JavaScript:

// Create a fetch request: Use the fetch() function to create a new fetch request.You can pass in the URL of the resource you want to fetch, as well as any options you want to include.

// Handle the response: Use the.then() method to handle the response from the server.You can parse the response as JSON, text, or a blob using the.json(), .text(), or.blob() methods, respectively.

// Handle errors: Use the.catch() method to handle any errors that occur during the fetch request.

// Here is an example of how to use the Fetch API in JavaScript to fetch data from a server:


// fetch('https://example.com/api/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In the example above, we use the fetch() function to make a GET request to the URL 'https://example.com/api/data'.We then use the.json() method to parse the response as JSON, and log the resulting data to the console.If an error occurs during the fetch request, we catch it and log the error to the console.

// The Fetch API can be used to make a variety of network requests, including GET and POST requests, and it supports a wide range of data formats, including JSON, XML, and plain text.It is widely supported by modern browsers and is a powerful tool for building dynamic and responsive web applications.


// Fetch requests can include various options, such as headers, request method(GET, POST, etc.), mode(cors, no - cors, same - origin), and more.These options are passed as an object to the fetch() function as the second argument.

// The Fetch API can be used with any HTTP method, including GET, POST, PUT, DELETE, and more.To use a method other than GET, you need to include the method in the options object when calling fetch().

// The Fetch API can be used to upload files to a server, by creating a new FormData object and appending files to it using the.append() method.

// The Fetch API supports streaming responses, which means that it can process and display data as it is being received from the server, rather than waiting for the entire response to be received before displaying it.

// The Fetch API can be used in both browser and Node.js environments, although some options(such as mode) may not be available in Node.js.

//     Overall, the Fetch API is a powerful and flexible tool for making network requests in JavaScript, and it is widely used in modern web development.



// Some examples of using the Fetch API in JavaScript to make GET, POST, PUT, and DELETE requests:

// GET request:


// fetch('https://example.com/api/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In the example above, we use the fetch() function to make a GET request to the URL 'https://example.com/api/data'.We then use the.json() method to parse the response as JSON, and log the resulting data to the console.If an error occurs during the fetch request, we catch it and log the error to the console.

// POST request:


// fetch('https://example.com/api/data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ foo: 'bar' })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we use the fetch() function to make a POST request to the URL 'https://example.com/api/data'.We include the HTTP method as the method option in the options object, along with the headers and the request body(in this case, a JSON stringified object with a foo property set to 'bar'). We then use the.json() method to parse the response as JSON, and log the resulting data to the console.

// PUT request:


// fetch('https://example.com/api/data/123', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ foo: 'baz' })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we use the fetch() function to make a PUT request to the URL 'https://example.com/api/data/123'.We include the HTTP method as the method option in the options object, along with the headers and the request body(in this case, a JSON stringified object with a foo property set to 'baz'). We then use the.json() method to parse the response as JSON, and log the resulting data to the console.

// DELETE request:


// fetch('https://example.com/api/data/123', {
//     method: 'DELETE'
// })
//     .then(response => console.log(response.status))
//     .catch(error => console.error(error));

// In this example, we use the fetch() function to make a DELETE request to the URL 'https://example.com/api/data/123'.We include the HTTP method as the method option in the options object.We then use the.status property of the response object to log the HTTP status code to the console.

// These examples demonstrate how to use the Fetch API to make various types of HTTP requests in JavaScript.