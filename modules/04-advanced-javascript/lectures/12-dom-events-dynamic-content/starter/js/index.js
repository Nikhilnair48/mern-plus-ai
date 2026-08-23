Scope
Where can you access data? Eg: data stored in a variables

Global
index.js
const courseName = "Javascript";    // global

function showCourse() {
    const day = "Sunday";       // local
    console.log(courseName);
}

console.log(day);


// one line comment in JS
/*
    Multi-line comment
*/

/*
    Parts of a function
        - declaration - function keyword
        - function name - sayHi
        - function parameters - name
        - return value - number
        - function body - { ... }
*/
function sayHi(name) {
    alert("Hello " + name);

    return 1;
}

/* Javascript data types */
/*
number
    - negative or positive
    - decimal
    - limit to the number that can be represented: Number.MAX_VALUE
string
    - let test = "test";
    - let test2 = "test2";
    - combine test and test2? output: "testtest2"; 
        - concatenation
    - let test3 = test + test2; // test3 = "testtest2"
null (an intentional absence of any object or a value)
    - let a = null;

null vs undefined
if a variable has been declared, but not assigned a value,
    then JS will assign it undefined

boolean - true (1) /false (0)

array
    represent the weather data for this entire week as a numerical value in JS
        Input: 28,26,31,30,29,25,32
        let weatherData = [28,26,31,30,29,25,32];   // array of numbers
    Add a new weather data for last Sunday (34) to this array?
        weatherData.push(34);   // [28,26,31,30,29,25,32,34]
    Delete the last element from weatherData
        weatherData.pop();   // [28,26,31,30,29,25,32]

object: entity that stores data, has states and behaviors
    Scenario: we wish to represent a person
        - characteristics of a person?
            - name, age, email
    
    let name = "Nikhil";
    let age = 30;
    let email = "nikhil.nair@test.com";

    // an object can have keys & values
    let person = { name: "Nikhil", age: 30, email: "nikhil.nair@test.com" };

    function savePersonInformation(person) {
        // save the person info to a file
        // dot operator to access the keys in the object
        // person.name -> "Nikhil"
        // person.age -> 30
    }
/*

/* declare a variable */
let / const / var



// invoke a function
// sayHi();

// DOM
/*
Method vs function?
    - standadlone block of code
    - designed to perform a specific task
Argument vs parameter?
*/
// document.getElementById()

/*
    Types Functions
        - Arrow function
        - Anonymous function
    - map method
*/














=== -> value and data type

let a = 5;
let b = 6;

if(a === b) {
    console.log("true");
} else {
    console.log("false");
}

Output: false

let c = 7;  // number
let d = "7";    // string
// Type coersion
if(c == d) {
    console.log("true");
} else {
    console.log("false");
}
Output: true
Why?
Double equals (==)
Triple equals (===)
======================================================

let c = 7;      // number
let d = "7";    // string
// value AND data type
if(c === d) {
    console.log("true");
} else {
    console.log("false");
}
Output: false

// CSS
.container {
    height: 85vh;
}



// Named function
function returnReady() {
    return "Ready";
}

// Arrow function with zero parameters
const returnReady = () => "Ready";
returnReady();


function convertToUpperCase(name) {
    return name.toUpperCase();
}
// Arrow function with a single parameter
const toUpperCase = (name) => name.toUpperCase();
toUpperCase("Nikhil");

// Bookings in a hotel room
function bookingInformation(name, room) {
    return name + " - " + room;
}

// Arrow function with multiple parameters
const bookingInfo = (name, room) => name + " - " + room;
bookingInfo("Harsh", "103");
