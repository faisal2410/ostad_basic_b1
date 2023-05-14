// In JavaScript, you can handle HTTP responses from a server after making an HTTP request using the Fetch API or the XMLHttpRequest object.The response object contains information about the response status, headers, and body.

//     Here's an example of handling an HTTP response using the Fetch API:


// fetch('https://example.com/data')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we're making a GET request to the URL "https://example.com/data". The response is returned as a Promise, which we can then check for errors using the .ok property. If the response is not ok, we throw an error. Otherwise, we convert the response to JSON using the .json() method and log the data to the console. If there is an error, we catch it and log it to the console.

// You can also access the response headers using the.headers property of the response object.Here's an example:


// fetch('https://example.com/data')
//     .then(response => {
//         console.log(response.headers.get('Content-Type'));
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// In this example, we're making a GET request to the URL "https://example.com/data". After checking the response status, we access the "Content-Type" header using the .get() method of the .headers property. We then convert the response to JSON using the .json() method and log the data to the console. If there is an error, we catch it and log it to the console.

// You can also access the response body directly using the.text() or.blob() methods of the response object, depending on the type of data you're expecting. Once you have the response body, you can manipulate it or display it on your web page as needed.