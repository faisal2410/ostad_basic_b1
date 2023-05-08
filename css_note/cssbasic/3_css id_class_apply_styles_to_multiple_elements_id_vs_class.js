// CSS ID Selector: It selects an element based on its unique ID attribute value.To select an element by its ID, use the "#" character followed by the ID name.For example:


// #myDiv {
//     background - color: blue;
// }


// CSS Class Selector: It selects elements based on their class attribute values.To select an element by its class, use the "." character followed by the class name. For example:


//     .myClass {
//     color: red;
// }

// Applying styles to multiple elements: You can apply styles to multiple elements by using the same class name for each element, or by selecting multiple elements using their tag name or other attributes.For example:


//     .myClass {
//     font - size: 16px;
//     color: blue;
// }

// /* Select all <p> elements */
// p {
//     background - color: yellow;
// }

// /* Select all elements with the "myAttr" attribute */
// [myAttr] {
//     border: 1px solid black;
// }

// ID vs Class: An ID should be used when you need to apply a unique style to a single element, while a class should be used when you want to apply a common style to multiple elements.You can have multiple elements with the same class name, but only one element with a unique ID name.Also, it's generally recommended to avoid using inline styles and instead use external style sheets with classes and IDs for better maintainability and flexibility.