<?php

// Specificity in CSS is a measure of how specific a selector is when targeting elements in an HTML document. The specificity of a selector is used to determine which styles will be applied when multiple selectors target the same element.

// CSS selectors can be categorized into four levels of specificity, which are:

// Element selectors - these have the lowest specificity and target all elements of a given type, such as p, h1, or div.

// Class selectors - these have higher specificity and target elements with a specific class attribute, such as .my-class.

// ID selectors - these have even higher specificity and target elements with a specific ID attribute, such as #my-id.

// Inline styles - these have the highest specificity and are applied directly to an element using the style attribute.

// When multiple selectors target the same element, the selector with the highest specificity will take precedence and its styles will be applied. For example, if a p element has both an inline style and a class style applied to it, the inline style will take precedence because it has a higher specificity.

// It's important to understand specificity in CSS because it can affect how styles are applied to your HTML elements. By being mindful of the specificity of your selectors, you can avoid unintended conflicts and ensure that your styles are applied consistently across your document.


/*
👀 How to calculate css Specificity

CSS specificity is a way of determining which CSS rules are applied to an element when multiple conflicting rules target the same element. The specificity of a CSS selector is calculated based on the number and types of selectors used in the selector chain.

There are four types of selectors in CSS, which are used to calculate specificity, in order of increasing specificity:

Type selectors and pseudo-elements
Class selectors, attributes selectors and pseudo-classes
ID selectors
Inline styles (assigned directly to an element using the "style" attribute)
The following examples show how to calculate CSS specificity:

Example 1:

h1 {
    color: red;
}
This rule has a specificity of 1 (one type selector).

Example 2:

p.intro {
    color: blue;
}
This rule has a specificity of 10 (one class selector + one type selector).

Example 3:

#sidebar ul li a:hover {
    color: green;
}
This rule has a specificity of 113 (one ID selector + three type selectors + one class selector).

Example 4:


<style>
    p {
        color: red;
    }
</style>
<p style="color: blue;">This text is blue</p>
The first rule has a specificity of 1 (one type selector). The second rule has a specificity of 1000 (inline styles). The text in the paragraph will be blue because the inline style takes precedence over the rule in the <style> element.

When two or more CSS rules have the same specificity, the rule that appears later in the stylesheet will take precedence. In other words, the rule that is closer to the bottom of the stylesheet will be applied. If there is still a conflict, the inline style will take precedence.

Understanding CSS specificity is important when writing and debugging CSS code. It helps to avoid unexpected styling behaviors and to ensure that the desired styles are applied to the intended elements.







*/ 