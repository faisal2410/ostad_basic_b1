// 👀for-in loop:
// The for-in loop is used to iterate over the properties of an object.It loops through all the enumerable properties of an object and executes the code block for each property.

//     Here's an example:


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     gender: "male"
// };

// for (const property in person) {
//     console.log(`${property}: ${person[property]}`);
// }

// In this example, the for-in loop is used to iterate over the properties of the person object.The loop variable property represents the name of each property, and person[property] represents the value of each property.The code block inside the loop logs each property name and value to the console.

// 👀    for - of loop:
// The for-of loop is used to iterate over iterable objects such as arrays, strings, and sets.It loops through each element of the iterable object and executes the code block for each element.

//     Here's an example:


// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
//     console.log(number);
// }

// In this example, the for-of loop is used to iterate over the elements of the numbers array.The loop variable number represents each element of the array.The code block inside the loop logs each element to the console.

// The main difference between for-in and for-of loops is that for-in is used to iterate over the properties of an object, while for-of is used to iterate over the elements of an iterable object.It's important to choose the appropriate loop for the data structure you're working with.