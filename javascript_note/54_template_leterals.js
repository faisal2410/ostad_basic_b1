// Template literals are a feature introduced in ES6(ECMAScript 2015) that allow us to create strings with embedded expressions, making it easier to concatenate strings and variables together.

//     Here's an example of how to use template literals:


// const name = "John";
// const age = 30;

// const message = `My name is ${name} and I am ${age} years old.`;

// console.log(message); // "My name is John and I am 30 years old."

// In this example, we create two variables, name and age, and then use them to create a string using a template literal.We surround the string with backticks() instead of single or double quotes, which allows us to embed expressions inside the string using the ${ } syntax.

// The expressions inside ${ } are evaluated and their results are concatenated into the final string.In this case, name and age are concatenated into the string message.

// Template literals also support multi - line strings, which can be created by simply adding line breaks inside the backticks:


// const multiLineMessage = `
//   My name is ${name}
//   and I am ${age} years old.
//   This is a multi-line string.
// `;

// console.log(multiLineMessage);

// In this example, we create a multi - line string by adding line breaks inside the backticks.The result is a string with three lines, including the interpolated expressions for name and age.

// Template literals can make our code more readable and easier to maintain, especially when we need to concatenate strings and variables together.They also support advanced features such as tagged templates, which allow us to process template literals with custom functions.