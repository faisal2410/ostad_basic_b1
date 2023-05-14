// Strict mode is a feature in JavaScript that enables a stricter parser and runtime behavior for your code.When you enable strict mode in your script, you tell the JavaScript engine to enforce a set of rules that help you write better and more secure code.

// To enable strict mode, you simply include the string "use strict"; at the beginning of your script or a function.

// Here are some of the behaviors that are affected by strict mode:

// with statements are not allowed
// eval function has its own scope and cannot modify the outer scope
// You cannot use undeclared variables
// Function parameters must have unique names
// Assignments to non - writable properties or non - existing properties will throw errors
// Duplicate object property names are not allowed
// The delete operator cannot be used on non - configurable properties
// The this keyword is undefined in functions that are not called as methods
// Using strict mode can help you catch errors and write more robust code, as it makes the behavior of your code more predictable and less error - prone.However, it can also break code that relies on non - standard behavior, so you should use it with caution and test your code thoroughly after enabling it.

// Here's an example of how to enable strict mode in your script:

// javascript
// Copy code
// "use strict";

// function foo() {
//     x = 10; // Throws an error because x is undeclared in strict mode
//     console.log(this); // Outputs undefined because 'this' is undefined in strict mode
// }

// foo();
// In this example, we include "use strict"; at the beginning of the script, and define a function foo. Inside the function, we try to assign a value to an undeclared variable, which throws an error in strict mode.We also log the value of this, which is undefined in strict mode when called as a standalone function.

// Overall, strict mode is a powerful tool for writing better and more secure JavaScript code, and can help catch errors and enforce best practices.