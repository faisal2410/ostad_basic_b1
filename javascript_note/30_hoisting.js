// Hoisting is a JavaScript behavior that allows variables and functions to be used before they are declared in the code.When the JavaScript engine compiles the code, it first scans for variable and function declarations, and then moves them to the top of their respective scopes, which is called hoisting.However, only the declarations are hoisted, not the initializations or assignments.

// For example, consider the following code:


// console.log(x);
// var x = 5;
// Even though the console.log(x) statement appears before the variable x is declared, the code still runs without any errors because the variable declaration is hoisted to the top of the scope by the JavaScript engine, effectively rewriting the code like this:


// var x;
// console.log(x);
// x = 5;
// Function declarations are also hoisted to the top of their scope, which means that they can be called before they are defined in the code:


// example(); // Output: "Hello, world!"

// function example() {
//     console.log("Hello, world!");
// }
// However, function expressions are not hoisted, which means that they must be defined before they are called:


// example(); // Error: example is not a function

// var example = function () {
//     console.log("Hello, world!");
// };

// It's important to note that hoisting only applies to variable and function declarations, not to variable assignments or function expressions. Therefore, it's good practice to always declare variables and functions before using them to avoid unexpected behavior.