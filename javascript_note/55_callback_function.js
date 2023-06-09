// Callback functions are an essential concept in JavaScript and other programming languages.They allow you to pass a function as an argument to another function and then invoke that function later on within the receiving function. Callback functions are commonly used for asynchronous operations, event handling, and more.

    // Let's start with a simple example to understand the basic concept of callback functions. Consider the following scenario: we have a function called greet(), and we want to pass a callback function that will be invoked after the greeting message is displayed. Here's how you can do it:


// 👉function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('John', sayGoodbye);


// In this example, we have two functions: greet() and sayGoodbye().The greet() function takes two parameters: name(a string) and callback(a function).Inside greet(), we first display a greeting message with the provided name using console.log().Then, we invoke the callback() function, which is the callback function passed as an argument.

// In this case, we pass sayGoodbye as the callback function when calling greet('John', sayGoodbye).So, after the greeting message is displayed, the callback() function is invoked, resulting in the message "Goodbye!" being printed to the console.

// This demonstrates the basic idea of a callback function. You can pass any function as a callback, and it will be executed at the appropriate time within the receiving function.

// It's important to note that callback functions can also accept arguments. Let's modify our previous example to demonstrate this:


// 👉 function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback(name);
// }

// function sayGoodbye(name) {
//     console.log('Goodbye, ' + name + '!');
// }

// greet('John', sayGoodbye);

// In this updated example, we modified the sayGoodbye() function to accept an additional name parameter.When we call callback(name) inside greet(), we pass the name argument as well.Consequently, the sayGoodbye() function can receive and use this argument when it is invoked.

//     That's the basic idea of callback functions. They allow you to pass functions as arguments and invoke them at a specific point within another function. Callback functions are widely used in JavaScript and are particularly useful for handling asynchronous operations like AJAX requests or event handling in web development.

// 👉 Real life example of callback function

// Let's imagine you have a web application that allows users to upload images. After the image is uploaded, you want to perform some operations on it, such as resizing or applying filters. However, these operations may take some time to complete, so you want to execute a callback function once the operations are finished.


// function uploadImage(file, callback) {
//     // Simulating image upload process
//     console.log('Uploading image: ' + file);

//     // Simulating delay for processing operations
//     setTimeout(function () {
//         // Simulating image processing operations
//         console.log('Resizing image: ' + file);
//         // Perform image resizing here

//         console.log('Applying filters to image: ' + file);
//         // Apply filters to the image here

//         // Invoke the callback function
//         callback();
//     }, 2000); // Simulating a delay of 2 seconds
// }

// function displayMessage() {
//     console.log('Image processing complete. Displaying the image.');
//     // Display the processed image here
// }

// function test() {
//     console.log("test")
// }

// // Usage
// let file = 'example.jpg';
// uploadImage(file, displayMessage);
// uploadImage(file, test);

// In this example, the uploadImage() function takes two parameters: file(representing the image file to be uploaded) and callback(representing the callback function to be executed after the image processing is complete).

// Inside the uploadImage() function, we simulate the image upload process by displaying a message in the console.Then, using setTimeout(), we simulate a delay of 2 seconds to represent the time taken for image processing operations.

// After the timeout, the callback function is invoked, simulating the completion of image processing.In this case, the displayMessage() function is used as the callback function. It logs a message to the console indicating that the image processing is complete and performs any additional actions, such as displaying the processed image on the web page.

// By utilizing a callback function, you can ensure that the displayMessage() function is executed only after the image processing is finished, preventing any synchronization issues or incorrect sequencing of operations.

// This example demonstrates the practical use of a callback function in a real - life scenario, where you may need to perform time - consuming operations asynchronously and execute a callback function when they are completed.


// 👉 Another real-life example of callback function

// Let's say you have a music streaming application, and you want to play a song. However, before playing the song, you need to check if the user is authorized to access it. You can use a callback function to handle the authorization check and execute the playback once authorization is confirmed.


// function checkAuthorization(songId, callback) {
//     // Simulating authorization check
//     console.log('Checking authorization for song with ID: ' + songId);

//     // Simulating asynchronous API request
//     setTimeout(function () {
//         // Simulating authorization status
//         let isAuthorized = true;

//         // Invoke the callback function with the authorization status
//         callback(isAuthorized);
//     }, 2000); // Simulating a delay of 2 seconds
// }

// function playSong(songId) {
//     checkAuthorization(songId, function (isAuthorized) {
//         if (isAuthorized) {
//             console.log('Playing song with ID: ' + songId);
//             // Play the song here
//         } else {
//             console.log('You are not authorized to play this song.');
//             // Display an error message or handle unauthorized access
//         }
//     });
// }

// // Usage
// let songId = '12345';
// playSong(songId);

// In this example, the checkAuthorization() function takes two parameters: songId(representing the ID of the song to be played) and callback(representing the callback function to be executed with the authorization status).

// Inside the checkAuthorization() function, we simulate the authorization check by displaying a message in the console.Then, using setTimeout(), we simulate an asynchronous API request that takes 2 seconds to complete.

// After the timeout, the callback function is invoked, passing the authorization status(a boolean value) as an argument.In this case, an anonymous function is used as the callback function within the playSong() function. It checks if the user is authorized to play the song and performs the necessary actions accordingly.

// If the user is authorized, the song is played, and a message indicating the song ID is logged to the console.Otherwise, if the user is not authorized, an error message is displayed or any other appropriate handling can be performed.

// This example demonstrates how a callback function can be used to handle an asynchronous operation, such as an authorization check, and execute the playback of a song once the authorization status is confirmed.

// I hope this example provides a clearer understanding of how callbacks can be used in real - life scenarios.If you have any further questions, feel free to ask!

// 👉 Another real-life example of callback function

// Imagine you have a shopping website, and you want to implement a feature where users can add items to their shopping cart.After adding an item to the cart, you want to update the cart's total price and display it on the web page. You can use a callback function to handle the update and display of the cart's total price.


// function addToCart(item, price, callback) {
//     // Simulating adding the item to the cart
//     console.log('Adding ' + item + ' to the cart.');

//     // Simulating a delay for processing
//     setTimeout(function () {
//         // Update the cart's total price
//         var cartTotal = calculateCartTotal(price);

//         // Invoke the callback function with the updated total price
//         callback(cartTotal);
//     }, 2000); // Simulating a delay of 2 seconds
// }

// function calculateCartTotal(price) {
//     // Simulating calculation of the cart's total price
//     var cartTotal = 0; // Assume the initial total is 0

//     // Calculate the updated total price
//     // (Here, we simply add the provided price to the current total)
//     cartTotal += price;

//     return cartTotal;
// }

// function displayCartTotal(total) {
//     console.log('Cart total: $' + total.toFixed(2));
//     // Update and display the cart total on the web page
// }

// // Usage
// let item = 'Product ABC';
// let price = 19.99;

// addToCart(item, price, displayCartTotal);

// In this example, the addToCart() function takes three parameters: item(representing the item to be added to the cart), price(representing the price of the item), and callback(representing the callback function to be executed with the updated cart total).

// Inside the addToCart() function, we simulate the process of adding the item to the cart by displaying a message in the console.Then, using setTimeout(), we simulate a delay of 2 seconds for processing.

// After the timeout, the callback function is invoked, passing the updated cart total as an argument.In this case, the displayCartTotal() function is used as the callback function. It logs the cart's total price to the console and can perform any additional actions, such as updating and displaying the cart total on the web page.

// The calculateCartTotal() function is a helper function that simulates the calculation of the cart's total price. In this example, we assume the initial total is 0 and simply add the provided item price to it.

// This example demonstrates how a callback function can be used to handle the updating and displaying of data after a specific operation, such as adding an item to a shopping cart, is completed.

// I hope this example helps you understand how callbacks can be applied in real - life scenarios.If you have any further questions, feel free to ask!
























