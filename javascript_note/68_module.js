// Modules are a way of organizing and encapsulating code in JavaScript.They allow you to write reusable code that can be easily shared between different parts of your application.

// Before the introduction of ES6, JavaScript didn't have a built-in way to implement modules. Developers had to use various workarounds, such as the CommonJS and AMD specifications, or create their own custom module systems.

// With the introduction of ES6, JavaScript now has a built -in module system.Modules in ES6 are declared using the import and export statements.

//     Here's an example of how to define and use a module in JavaScript:


 // math.js
// export const add = (a, b) => {
//     return a + b;
// };

 // main.js
// import { add } from './math.js';

// console.log(add(2, 3)); // Outputs 5

// In this example, we define a module math.js that exports a function add. We then import the add function from math.js into another module main.js using the import statement.We can then use the add function in main.js as if it were defined in that module.

// There are different ways to export and import modules in JavaScript, such as default exports and named exports.Here are some examples:


 // math.js (default export)
// const add = (a, b) => {
//     return a + b;
// };

// export default add;

 // main.js (default import)
// import add from './math.js';

// console.log(add(2, 3)); // Outputs 5

 // math.js (named export)
// export const add = (a, b) => {
//     return a + b;
// };

// export const subtract = (a, b) => {
//     return a - b;
// };

 // main.js (named import)
// import { add, subtract } from './math.js';

// console.log(add(2, 3)); // Outputs 5
// console.log(subtract(3, 2)); // Outputs 1

// In summary, modules in JavaScript allow you to organize and encapsulate code, and make it easy to reuse and share between different parts of your application.The import and export statements provide a simple and standardized way to define and use modules in your JavaScript code.