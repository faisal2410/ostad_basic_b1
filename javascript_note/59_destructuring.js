// Destructuring is a way to extract values from arrays or objects and assign them to variables in a single statement.This makes it easy to work with complex data structures and can result in cleaner and more concise code.

//     Let's start with arrays. Here's an example of destructuring an array in JavaScript:


// const myArray = [1, 2, 3];
// const [a, b, c] = myArray;

// In this example, we define an array myArray with three values.We then use destructuring to assign the values to variables a, b, and c in a single statement.The resulting values of a, b, and c are 1, 2, and 3 respectively.

// Destructuring can also be used with objects.Here's an example of destructuring an object in JavaScript:


// const myObject = { name: "John", age: 30 };
// const { name, age } = myObject;

// In this example, we define an object myObject with two properties: name and age.We then use destructuring to assign the values of name and age to variables with the same name in a single statement.The resulting values of name and age are "John" and 30 respectively.

// Destructuring can also be used with nested objects and arrays.Here's an example of destructuring a nested object in JavaScript:


// const myObject = { name: "John", age: 30, address: { street: "Main St", city: "New York" } };
// const { name, age, address: { street, city } } = myObject;

// In this example, we define an object myObject with three properties: name, age, and address.The address property is itself an object with two properties: street and city.We then use destructuring to assign the values of name, age, street, and city to variables in a single statement.

// Destructuring can also be used with default values.Here's an example of destructuring with default values in JavaScript:


// const myArray = [1];
// const [a, b = 2] = myArray;
// In this example, we define an array myArray with one value.We then use destructuring to assign the first value to variable a and the second value to variable b, with a default value of 2 if the second value is not present in the array.

//     Overall, destructuring is a powerful feature in JavaScript that can make working with arrays and objects more intuitive and concise.