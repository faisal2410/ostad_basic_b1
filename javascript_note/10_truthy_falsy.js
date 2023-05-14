// In JavaScript, a truthy value is a value that is considered true when evaluated in a Boolean context, while a falsy value is a value that is considered false when evaluated in a Boolean context.This can be useful when writing conditional statements or checking for the existence of a value.

// Here are some examples of truthy and falsy values in JavaScript:

// Truthy values:


if ("hello") {
    console.log("This is a truthy value");
}

if (42) {
    console.log("This is a truthy value");
}

if (true) {
    console.log("This is a truthy value");
}

if ({}) {
    console.log("This is a truthy value");
}

if ([]) {
    console.log("This is a truthy value");
}
// All of the above examples will output "This is a truthy value" because they are considered truthy values in JavaScript.

// Falsy values:


if (false) {
    console.log("This is a falsy value");
}

if (0) {
    console.log("This is a falsy value");
}

if (null) {
    console.log("This is a falsy value");
}

if (undefined) {
    console.log("This is a falsy value");
}

if (NaN) {
    console.log("This is a falsy value");
}
// All of the above examples will not output anything because they are considered falsy values in JavaScript.

//     It's important to note that the concept of truthy and falsy values can be used in a variety of contexts in JavaScript. For example, when checking if a value exists, you can use the shorthand if (value) to check if the value is truthy, or if (!value) to check if the value is falsy.

function checkTruthyFalsy(value) {
    let result = "";

    if (value) {
        result = `${value} is a truthy value`;
    } else {
        result = `${value} is a falsy value`;
    }

    return result;
}

console.log(checkTruthyFalsy(10));
// Output: "10 is a truthy value"

console.log(checkTruthyFalsy("hello"));
// Output: "hello is a truthy value"

console.log(checkTruthyFalsy(undefined));
// Output: "undefined is a falsy value"

console.log(checkTruthyFalsy(null));
// Output: "null is a falsy value"

console.log(checkTruthyFalsy(0));
// Output: "0 is a falsy value"





