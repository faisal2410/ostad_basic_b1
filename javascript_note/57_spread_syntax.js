// Spread syntax is a feature in JavaScript that allows an iterable(e.g.an array or string) to be expanded into individual elements.It is denoted by the ellipsis(...) followed by the name of the iterable.Spread syntax can be used in a variety of ways to simplify and enhance your code.

// Here are some examples of how to use spread syntax in JavaScript:

// Spread an array into another array

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// In this example, we use spread syntax to combine two arrays(array1 and array2) into a new array called combinedArray.

// Pass arguments to a function

// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6

// In this example, we use spread syntax to pass an array of numbers as individual arguments to the sum function.

// Copy an array

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // Output: [1, 2, 3]
// In this example, we use spread syntax to create a copy of an existing array(originalArray).

// Combine objects

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// In this example, we use spread syntax to combine two objects(obj1 and obj2) into a new object called combinedObject.

// Spread syntax can be used in many other ways as well, such as to create a new array with additional elements or to spread elements into a function call. It is a powerful and versatile feature in JavaScript that can help simplify your code and make it more readable.


// Merge objects

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// In this example, we use spread syntax to merge two objects(obj1 and obj2) into a new object called mergedObject.When there are duplicate keys, the value of the last key in the spread list will override previous values.

// Create a new array with additional elements

// const originalArray = [1, 2, 3];
// const newArray = [...originalArray, 4, 5, 6];
// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// In this example, we use spread syntax to create a new array called newArray that contains the elements of an existing array(originalArray) as well as additional elements(4, 5, and 6).

// Clone an object

// const originalObject = { a: 1, b: 2 };
// const clonedObject = { ...originalObject };
// console.log(clonedObject); // Output: { a: 1, b: 2 }

// In this example, we use spread syntax to create a clone of an existing object(originalObject).The new object(clonedObject) has the same key - value pairs as the original object, but is a separate object in memory.

// Spread elements into a function call

// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6

// In this example, we use spread syntax to pass the elements of an array(numbers) as individual arguments to the sum function.

// Spread syntax is a very useful feature in JavaScript that can simplify your code and make it more readable.It is commonly used in modern JavaScript frameworks like React and Angular.



// The rest parameter is a syntax feature introduced in ES6 that allows a function to accept an indefinite number of arguments as an array.It is denoted by three dots(...) followed by the name of the parameter.The rest parameter can be used to simplify your code and make it more flexible.

// Here are some examples of how to use the rest parameter in JavaScript:

// Accept any number of arguments

// function sum(...numbers) {
//     return numbers.reduce((acc, val) => acc + val, 0);
// }
// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// In this example, we use the rest parameter to accept any number of arguments passed to the sum function. The numbers parameter will be an array containing all of the arguments.

// Combine fixed and variable parameters

// function greeting(name, ...titles) {
//     const formattedTitles = titles.map(title => title.toUpperCase());
//     const titleString = formattedTitles.join(', ');
//     return `Hello, ${name} (${titleString})`;
// }
// console.log(greeting('John', 'Mr', 'Dr', 'Esq')); // Output: "Hello, John (MR, DR, ESQ)"

// In this example, we use the rest parameter to accept an indefinite number of titles passed to the greeting function. The first parameter, name, is a fixed parameter.The rest of the arguments will be collected into the titles array.

// Ignore some parameters

// function logMessage(prefix, ...messages) {
//     console.log(`${prefix}: ${messages.join(', ')}`);
// }
// logMessage('Info', 'This is a message', 'This is another message'); // Output: "Info: This is a message, This is another message"
// logMessage('Error'); // Output: "Error:"

// In this example, we use the rest parameter to collect an indefinite number of messages passed to the logMessage function. The prefix parameter is a required parameter, but the rest of the arguments are optional.If no additional arguments are passed, the messages array will be empty.

// The rest parameter is a powerful feature in JavaScript that can simplify your code and make it more flexible.It is commonly used in modern JavaScript frameworks like React and Angular.