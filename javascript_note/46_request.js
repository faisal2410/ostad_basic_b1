// In JavaScript, you can send HTTP requests using the built -in XMLHttpRequest object or the Fetch API.HTTP requests are used to retrieve data from a server or send data to a server.

// To make an HTTP request using the Fetch API, you can use the fetch() function, which takes a URL and an optional configuration object as arguments.The configuration object can contain properties like method, headers, body, mode, cache, credentials, and redirect.Here's an example of making an HTTP GET request using the Fetch API:


// fetch('https://example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we're making a GET request to the URL "https://example.com/data". The response is returned as a Promise, which we can then convert to JSON using the .json() method. We then log the data to the console. If there is an error, we catch it and log it to the console.

// To make an HTTP POST request using the Fetch API, you can set the method property of the configuration object to "POST" and include a body property with the data to be sent in the request.Here's an example:


// const data = { name: 'John', age: 30 };

// fetch('https://example.com/data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we're making a POST request to the URL "https://example.com/data" and including a JSON payload in the request body. The response is returned as a Promise, which we can then convert to JSON using the .json() method. We then log the data to the console. If there is an error, we catch it and log it to the console.

// There are other HTTP request methods you can use, such as PUT and DELETE, which can be set using the method property of the configuration object.You can also include headers, query parameters, and other options in the configuration object to customize your HTTP requests.