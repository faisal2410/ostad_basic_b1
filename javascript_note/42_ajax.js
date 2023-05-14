// AJAX(Asynchronous JavaScript and XML) is a technique in JavaScript that allows web pages to be updated asynchronously without requiring a full page refresh.It allows web applications to retrieve and send data to a server in the background without interfering with the display and behavior of the existing page.

// Here are the basic steps to use AJAX in JavaScript:

// Create an XMLHttpRequest object: The XMLHttpRequest object is used to communicate with the server and retrieve data.

// Open the connection: Use the open() method of the XMLHttpRequest object to specify the HTTP method(such as GET or POST) and the URL of the server.

// Set up the request: Use the setRequestHeader() method of the XMLHttpRequest object to set any necessary request headers, such as content type.

// Send the request: Use the send() method of the XMLHttpRequest object to send the request to the server.

// Handle the response: Use the onreadystatechange event of the XMLHttpRequest object to handle the response from the server.The response will be available in the responseText or responseXML property of the XMLHttpRequest object.

// Here is an example of how to use AJAX in JavaScript to retrieve data from a server:


// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://example.com/api/data");
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         console.log(response);
//     }
// };

// In the example above, we first create an XMLHttpRequest object and set the HTTP method and URL using the open() method.We then set the request header using the setRequestHeader() method and send the request to the server using the send() method.

// We handle the response from the server using the onreadystatechange event and check if the readyState is 4(which means the request is complete) and the status is 200(which means the request was successful).If the request was successful, we parse the response as JSON and log it to the console.

// AJAX can be used to create dynamic web applications that update the content of the page without requiring a full page refresh.It is commonly used to fetch and display data from APIs, update form data, and create interactive user interfaces.