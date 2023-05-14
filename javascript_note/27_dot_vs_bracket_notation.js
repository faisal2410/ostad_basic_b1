// In JavaScript, objects are a data type that stores data in key - value pairs.To access or manipulate the values of an object, you can use dot notation or bracket notation.

// Dot notation is a way to access object properties using a period(".") followed by the property name.For example, if you have an object called "person" with a property called "name", you can access it using dot notation like this:


// const person = { name: "John" };
// console.log(person.name); // Output: John

// Bracket notation is a way to access object properties using square brackets("[]") and a string that represents the property name.For example, you can access the "name" property of the "person" object using bracket notation like this:


// const person = { name: "John" };
// console.log(person["name"]); // Output: John

// Bracket notation is particularly useful when you need to access object properties dynamically, such as when the property name is stored in a variable:


// const person = { name: "John" };
// const propertyName = "name";
// console.log(person[propertyName]); // Output: John

// Both dot notation and bracket notation can be used to access or modify object properties, but dot notation is generally preferred when the property name is known in advance, and bracket notation is preferred when the property name is dynamic or unknown.