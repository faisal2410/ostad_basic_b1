// In JavaScript, logical operators are used to combine two or more conditions and return a boolean(true / false) value based on the result of the logical operation.

// Here are some commonly used logical operators in JavaScript:

// AND(&&): This operator returns true if both conditions are true, otherwise false.
   
console.log(5 > 3 && 5 < 7); // true
console.log(5 > 7 && 5 < 3); // false
console.log(5 > 7 && 5 > 3); // false

// OR(||): This operator returns true if at least one of the conditions is true, otherwise false.
  

console.log(5 > 3 || 5 < 3); // true
console.log(5 > 7 || 5 < 3); // false
console.log(5 > 7 || 5 > 3); // false

// NOT(!): This operator negates the condition, meaning if the condition is true, it returns false, and if the condition is false, it returns true.
   
console.log(!(5 > 3)); // false
console.log(!(5 < 3)); // true

// Short - circuit evaluation: In JavaScript, logical operators are also used for short - circuit evaluation.This means that if the first condition in an AND(&&) operation is false, the second condition is not evaluated, since the whole operation would already be false.Similarly, if the first condition in an OR(||) operation is true, the second condition is not evaluated, since the whole operation would already be true.
  
// In this example, the second condition is not evaluated
console.log(false && (5 / 0)); // false

// In this example, the second condition is not evaluated
console.log(true || (5 / 0)); // true

// It's worth noting that the logical operators in JavaScript do not always return a boolean value. They may also return the value of one of their operands, depending on the context. For example, the AND (&&) operator returns the first value if it is falsy, otherwise it returns the second value. The OR (||) operator returns the first value if it is truthy, otherwise it returns the second value. This behavior is sometimes used for short-circuiting or for assigning default values to variables.



function checkBooleans(bool1, bool2) {
    let result = "";

    if (bool1 && bool2) {
        result = "Both values are true";
    } else if (bool1 || bool2) {
        result = "At least one value is true";
    } else {
        result = "Both values are false";
    }

    return result;
}

console.log(checkBooleans(true, true));
// Output: "Both values are true"

console.log(checkBooleans(true, false));
// Output: "At least one value is true"

console.log(checkBooleans(false, false));
// Output: "Both values are false"
