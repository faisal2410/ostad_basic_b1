// Optional chaining is a new feature in JavaScript that allows you to access properties and methods of an object without worrying about whether the object is null or undefined.This can be useful when you're working with complex data structures where some properties or methods might be missing or undefined.

// Here's an example of how to use optional chaining in JavaScript:


// let person = {
//     name: "John",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA"
//     }
// };

// console.log(person?.address?.city); // Output: "Anytown"
// console.log(person?.address?.zipcode); // Output: undefined
// console.log(person?.phone?.number); // Output: undefined

// In this example, we have an object person that has a name property and an address property that is itself an object with street, city, and state properties.We can use optional chaining to access these properties without worrying about whether they are defined.

//     The?.operator is used to chain properties and methods together.If a property or method in the chain is undefined or null, the chain will short - circuit and return undefined instead of throwing an error.

// In the first console.log statement, we use optional chaining to access the city property of the address object.Since the address object exists, the city property is successfully accessed and the value "Anytown" is returned.

// In the second console.log statement, we use optional chaining to access the zipcode property of the address object.Since the zipcode property does not exist, the chain short - circuits and returns undefined.

// In the third console.log statement, we use optional chaining to access the number property of the phone object, which does not exist.Since the phone object is undefined, the chain short - circuits and returns undefined.

// Optional chaining can be especially useful when working with data that comes from external sources, where you can't always guarantee that all properties and methods will be present. It can also help make your code more concise and easier to read by avoiding the need for complex if statements or try-catch blocks.