1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

These methods are used to select elements from the DOM.

getElementById()

Selects an element using its id

Returns only one element

Fast and simple

const element = document.getElementById("myId");
getElementsByClassName()

Selects elements using class name

Returns multiple elements

Returns a live HTMLCollection (updates automatically if DOM changes)

const elements = document.getElementsByClassName("myClass");
querySelector()

Uses any CSS selector

Returns the first matching element

More flexible

const element = document.querySelector(".myClass");
querySelectorAll()

Uses any CSS selector

Returns all matching elements

Returns a static NodeList (does not auto update)

const elements = document.querySelectorAll(".myClass");
Short Comparison
Method	Returns	Selector Type
getElementById	One element	ID
getElementsByClassName	Multiple elements	Class
querySelector	First match	Any CSS selector
querySelectorAll	All matches	Any CSS selector

2. How to Create and Insert a New Element into the DOM

There are three main steps.

Step 1: Create element
const newDiv = document.createElement("div");
Step 2: Add content
newDiv.textContent = "Hello World";
Step 3: Insert into DOM
document.body.appendChild(newDiv);

You can also use:

append()

prepend()

insertBefore()


3. What is Event Bubbling?

Event Bubbling means when an event happens on a child element, it moves up to its parent, then grandparent, and so on.

Example:

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});

If you click the child, both messages will be printed because the event moves upward.


4. What is Event Delegation? Why is it Useful?

Event Delegation is a technique where you add an event listener to a parent element instead of adding it to many child elements.

It works because of event bubbling.

Example:

document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
Why it is useful:

Uses less memory

Better performance

Works for dynamically added elements

Cleaner code


5. Difference between preventDefault() and stopPropagation()
preventDefault()

Stops the browser’s default action.

Example:

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

This prevents form submission.

stopPropagation()

Stops the event from moving to parent elements.

Example:

button.addEventListener("click", function(event) {
  event.stopPropagation();
});
Simple Difference
Method	What it does
preventDefault()	Stops default browser action
stopPropagation()	Stops event bubbling
