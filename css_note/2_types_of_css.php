<?php
// There are three types of CSS:

// Inline CSS
// Internal CSS
// External CSS
// Let's go through each one in more detail and provide an example for each:

// Inline CSS:
// Inline CSS is used to apply a style to a single element. It's defined in the element's tag using the style attribute. Here's an example:


// <h1 style="color: blue; font-size: 24px;">Hello World</h1>

// In this example, the style is defined in the <h1> tag using the style attribute. The color property is set to blue, and the font-size property is set to 24 pixels.

// Internal CSS:
// Internal CSS is defined in the head section of the HTML document using the <style> tag. It's used to apply styles to multiple elements on a single page. Here's an example:


// <head>
//   <style>
//     h1 {
//       color: blue;
//       font-size: 24px;
//     }
//     p {
//       color: red;
//       font-size: 16px;
//     }
//   </style>
// </head>
// <body>
//   <h1>Hello World</h1>
//   <p>This is a paragraph.</p>
// </body>

// In this example, the style is defined in the head section of the HTML document using the <style> tag. The h1 selector targets all <h1> tags, and the p selector targets all <p> tags. The color and font-size properties are then applied to the selected elements.

// External CSS:
// External CSS is defined in a separate CSS file and is linked to the HTML document using the <link> tag. It's used to apply styles to multiple pages on a website. Here's an example:


// <!DOCTYPE html>
// <html>
//   <head>
//     <link rel="stylesheet" type="text/css" href="styles.css">
//   </head>
//   <body>
//     <h1>Hello World</h1>
//     <p>This is a paragraph.</p>
//   </body>
// </html>


// In this example, the external CSS file is linked to the HTML document using the <link> tag. The href attribute specifies the location of the CSS file. The styles are defined in the styles.css file:


// h1 {
//   color: blue;
//   font-size: 24px;
// }
// p {
//   color: red;
//   font-size: 16px;
// }