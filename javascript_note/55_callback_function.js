// A callback function is a function that is passed as an argument to another function, and is executed when the first function is finished executing.In other words, a callback function is a way to pass a function as data to another function, and have it called back later when needed.

//     Here's an example of a callback function:


// function calculate(num1, num2, operation, callback) {
//     const result = operation(num1, num2);
//     callback(result);
// }

// function displayResult(result) {
//     console.log("The result is: " + result);
// }

// calculate(10, 5, function (a, b) {
//     return a + b;
// }, displayResult);

// In this example, we define a function called calculate that takes in two numbers, an operation function, and a callback function. The calculate function performs the operation on the two numbers, and then calls the callback function with the result.

// We also define a function called displayResult that simply logs the result to the console.

//     Finally, we call the calculate function with the numbers 10 and 5, an anonymous function that adds two numbers together, and the displayResult function as the callback.

// The calculate function performs the addition operation on the two numbers(10 + 5 = 15), and then calls the displayResult function with the result(15).The displayResult function logs the result to the console.

// Callback functions are commonly used in JavaScript for asynchronous programming, such as fetching data from an API or performing operations that take a long time to complete.In these cases, we can pass a callback function to the asynchronous function, which will be called when the operation is complete and the data is available.

// Callbacks can also be used for more advanced programming techniques, such as higher - order functions, which are functions that take in other functions as arguments or return functions as results.