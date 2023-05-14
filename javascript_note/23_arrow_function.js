// Arrow functions are a shorthand syntax for creating functions in JavaScript.They were introduced in ES6(ECMAScript 2015) and are a popular way of writing functions because they are more concise and easier to read.

//     Here's an example of an arrow function that takes one parameter and returns a greeting message:


// const greet = (name) => {
//     return "Hello, " + name + "!";
// }

// This function is called greet and it takes one parameter called name.The arrow function syntax consists of the => symbol, which separates the function parameters from the function body. In this example, the function body simply returns a string that says "Hello, " followed by the value of the name parameter.

// To call the greet function, you can use it like this:


// console.log(greet("John")); // logs "Hello, John!"
// In this example, the greet function is called with the value "John" as its parameter.The function returns the greeting message "Hello, John!", which is then logged to the console.

// Arrow functions are especially useful when you need to write short, concise functions.Here's an example of an arrow function that takes no parameters and returns a random number between 1 and 10:


// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// This function is called getRandomNumber and it uses the Math.random() method to generate a random number between 0 and 1. It then multiplies that number by 10 and rounds it down to the nearest integer using the Math.floor() method.Finally, it adds 1 to the result to get a random number between 1 and 10.

// To call the getRandomNumber function, you can use it like this:


// console.log(getRandomNumber()); // logs a random number between 1 and 10
// I hope this gives you a basic understanding of arrow functions in JavaScript! Let me know if you have any further questions.