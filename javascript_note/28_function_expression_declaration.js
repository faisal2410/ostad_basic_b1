// In JavaScript, there are two ways to define functions: function expressions and function declarations.

// Function Declaration:

// A function declaration is a way to define a function in JavaScript using the function keyword, followed by the function name, the parameter list, and the function body enclosed in curly braces.Here's an example:


// function add(a, b) {
//     return a + b;
// }

// Function declarations are hoisted to the top of their scope, which means you can call the function before it's defined in the code:


// console.log(add(2, 3)); // Output: 5

// function add(a, b) {
//     return a + b;
// }
// Function Expression:

// A function expression is a way to define a function as a value assigned to a variable.Here's an example:


// const add = function (a, b) {
//     return a + b;
// };

// Function expressions are not hoisted to the top of their scope, which means you must define the function before you can call it:


// const result = add(2, 3); // Error: add is not defined

// const add = function (a, b) {
//     return a + b;
// };


// One advantage of function expressions is that they can be used to create anonymous functions, which can be useful in certain situations, such as event handlers or callback functions.

// In summary, function declarations are hoisted and can be called before they are defined, while function expressions are not hoisted and must be defined before they are called.Both function declarations and function expressions have their own use cases and are important tools in JavaScript programming.