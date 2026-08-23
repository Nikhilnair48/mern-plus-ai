Intro to JS

- Variables and Data Types
    - Variable declaration, assignment
- Operators (arithmetic, logical operators)
    - Conditional statements (greater than, less than, ...)
- Loops (for, while, do...while)
- Named Functions & Scopes (global vs local)
    - Hoisting
- Arrays, Objects
    - Arrays methods (eg: map, filter, push, pop...)
    - Object methods
- Syntax
    - If you'd like to explore: semantics


- this keyword
    - functions? yes
    - objects? yes
    - classes? no

// const -> if you declare a variable using const, you cannot change the value
// delcaration: const name
// initialization or assignment:  = "Debasish";
const name = "Debasish";

// Data Type: Object -> keys and values
// name = "Harsh"
// is the learner active or not? boolean (true/false)
const learner = {
    // name here is a property of learner
    name: "Harsh",
    isActive: true,

    // "Hi, my name is Harsh"
    introduce() {
        console.log("Hi, my name is " + name);
    }    
};


Loops
Objective: run around a track 10 times
Print to the console:
    Lap 1 completed
    Lap 2 completed
    ...
    Lap 10 completed

for:
    starting point? 0 lap   -> number (data type)
    ending point: 10 laps
    we will increment/track a single lap at a time

for(declare & initialize loop variable; condition to stop; increment the loop variable) {
    // body
}

for(let lap = 0; lap < 10; lap++) {
    console.log("Lap 1 completed");
}

Different kinds of for-loop
Classic for-loop
for...of - useful if you wish to iterate over an array
for...in - useful if you wish to iterate over an object
forEach - arrays


int currentLap = 5;
int lastLap = 50;
while(currentLap < lastLap) {
    console.log("Lap completed " + currentLap);
}











=================

// named function
function introduceLearner(name) {
    // statements
    // declare variables, assign, etc
    console.log("Hi, my name is " + name);
}

const learner = {
    // name here is a property of learner
    name: "Harsh",
    isActive: true,

    // "Hi, my name is Harsh"
    introduce() {
        console.log("Hi, my name is " + this.name);
    }
};

// the dot operator
console.log(learner.name);
console.log(learner.isActive);
learner.introduce();

// invoking or calling a function
introduceLearner();

// Stack trace - root cause of an error

/*
Objective: run around a track 10 times
Print to the console:
    Lap 1 completed
    Lap 2 completed
    ...
    Lap 10 completed
*/

for(let lap = 1; lap <= 10; lap++) {
    console.log("Lap completed: " + lap);
}
console.log("==================")
 // "Lap completed: " + lap + 1 -> Lap completed: 11
for(let lap = 0; lap <= 10; lap++) {
    // javascript interprets your code from left to right
    // 5 + 5 = 10
    // "A " + "B" => "A B"
    //"Lap completed: 01" 
    // how do we fix it? -> Lap completed: 1
    console.log("Lap completed: " + (lap + 1));
}


const isCafeOpen = "false"; // data type: string



/*
Name a part of this function:
    - function name: greetCustomer
    - parameter: name
    - argument: "Arun"
    - function body & returns
*/
function greetCustomer(name) {
  return "Hello, " + name;
}

// invoking/calling a function called greetCustomer
greetCustomer("Arun");


// return types: string
function formatOrder(item) {
    return "Order: " + item;
}
// declare a variable, label
// call the function, formatOrder, with an argument, Masala Chai
const label = formatOrder("Masala Chai");



// delcare a function
function showMessage() {
    console.log("hello");
    return 10;
}

// invoke/call a function
// value of result? 10
const result = showMessage();
console.log(result);
// what is the type of anotherFunction?
// assign to anotherFunction, a "reference" to showMessage
const anotherFunction = showMessage;
console.log(anotherFunction);

// invoke/call the reference
anotherFunction();


// what can be considered a parameter to a function?
    // data type: number, boolean, objects, arrays, strings...
    // function














Objectives

What have we covered?

Before I started: Basics of JS, Git
After I started:
    - Frontend Basics
        - HTML
        - CSS
            - Selectors
            - Styling Basics 
            - Box Model
            - CSS Positioning
            - Layout Control Using Positioning
            - Responsive Design Basics 
            - Media Queries 
            - Mobile-First Approach
        - Tailwind
            - Introduction to Tailwind CSS 
            - Setup and Configuration 
            - Utility-First Styling
            - Tailwind Layout Utilities 
        - Flex, Grid
            - Flexbox in Tailwind 
            - Grid in Tailwind
    - Advanced JS
        - DOM
            - Selecting elements, Event Handling, Updating the DOM
            - Browser objects (window, location, navigator, etc)
            - Modifying the browser URL
        - Newer features (ES6+ features in JS)
            - let, const
            - Arrow function






- Variables and Data Types
    - Variable declaration, assignment
- Operators (arithmetic, logical operators)
    - Conditional statements (greater than, less than, ...)
- Loops (for, while, do...while)
- Named Functions & Scopes (global vs local)
    - Hoisting
- Arrays, Objects
    - Arrays methods (eg: map, filter, push, pop...)
    - Object methods
- Syntax
    - If you'd like to explore: semantics