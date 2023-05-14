// Operator precedence in JavaScript determines the order in which operators are evaluated when an expression contains multiple operators. It is important to understand operator precedence in order to write expressions that produce the expected results.

// In JavaScript, operators have different levels of precedence, which determine the order in which they are evaluated. The operators with higher precedence are evaluated first. If operators have the same precedence, they are evaluated from left to right.

// Here is a list of JavaScript operators, ordered by precedence from highest to lowest:

// Grouping operator: ()
// Member access operator: . []
// Computed member access operator: []
// Function call operator: ()
// new operator
// Increment and decrement operators: ++ --
// Logical NOT operator: !
// Multiplication and division operators: * / %
// Addition and subtraction operators: + -
// Relational operators: < > <= >=
// Equality operators: == !=
// Strict equality operators: === !==
// Logical AND operator: &&
// Logical OR operator: ||
// Conditional operator: ?:
// Assignment operators: = += -= *= /= %=

// Here's an example to illustrate how operator precedence works in JavaScript:



var result = 5*3 + 10 * 2 ; // result will be 25, not 30


// In this example, the multiplication operator (*) has higher precedence than the addition operator (+). So, 10 * 2 is evaluated first, resulting in 20. Then, the result of that operation is added to 5, resulting in 25.

// You can use parentheses to change the order of evaluation in an expression:


var result = (5 + 10) * 2; // result will be 30

// In this example, the addition operation is evaluated first because it is inside the parentheses. So, 5 + 10 results in 15. Then, the multiplication operator (*) is evaluated, resulting in 30.

// I hope this explanation helps you understand operator precedence in JavaScript!






// Example 2: Logical AND and OR operators


var result = true || false && true;
console.log(result); // Output: true

// In this example, the logical AND operator && has a higher precedence than the logical OR operator ||.However, the logical AND operator && is evaluated first due to the use of parentheses.The expression false && true inside the parentheses evaluates to false, but the OR operator || considers true to be a "truthy" value and returns true without evaluating the expression after it.So, the final result is true.

//     Example 3: Unary operators


var result = -5 + 10;
console.log(result); // Output: 5
// In this example, the unary minus operator - has a higher precedence than the addition operator +.The expression - 5 is evaluated first, resulting in -5. Then, the result of - 5 is added to 10, giving us the final result of 5.



// 1. What is the value of x after the following expression is evaluated?
var x = 10 * 2 + 5 / 5 - 3;
// A. 18
// B. 19
// C. 20
// D. 21
// Answer: B. 18

// 2. What is the value of y after the following expression is evaluated?
var y = 5 + 2 * 3 % 2 - 1;
// A. 5
// B. 6
// C. 1
// D. 0
// Answer: C. 1

// 3. What is the value of z after the following expression is evaluated?
var a = 10;
var z = a++ * 2 - a-- * 3;  //11*2-9*3
// A. -10
// B. -5
// C. 0
// D. 5
// Answer: A. -10

// 4. What is the value of w after the following expression is evaluated?
var w = 10 > 5 && 5 < 3 || 2 + 2 === 5;
// A. true
// B. false
// C. undefined
// D. null
// Answer: B. false
