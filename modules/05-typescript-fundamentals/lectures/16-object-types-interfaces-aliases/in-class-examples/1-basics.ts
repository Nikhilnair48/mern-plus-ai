/**
Union Type: allows a value to belong to one of several permitted types

*/
//: string -> static typing
let userId: string | number;
userId = 101;
userId = "GUVI-101";
userId = true;

/*
    Parts of a function: name, parameter list, body, return type
*/
function search(value: string | number): string | boolean {
    // let name = "Rajanandhini";
    // console.log(`Searching for: ${value}`);
    // return name;
    if(typeof value === "string") {
        return value.toUpperCase();
    }
    return false;
}


/**
static typing -> we explicity tell the language that a variable must be of a specific type

dynamic typing
index.js
function printHello() { ... }

import { printHello } from "./index.js";
printHello -> function type

*/

// direction should only be "left" or "right"
let direction: "left" | "right";

// Enumeration (enums)
let status: "pending" | "submitted" | "graded";

// Type Aliases
type AssignmentStatus = "pending" | "submitted" | "graded";
let updatedStatus: AssignmentStatus;

/**
    Type inference - determines a type from the available information without requiring us to write the type manually
*/
let courseName = "MERN + AI course";    // TS infers that courseName must be a string!
courseName = 10;     // invalid

let isStoreOpen = false;
isStoreOpen = "100";     // invalid

const prices = [100, 200, 300];

const product = {
    name: "Mouse",
    price: 1000,
    available: true
};
product.price = 1500;
product.price = "fourteen hundred"; // invalid



/* Object Typing: Inline */
const product: { name: string, price: number, available: boolean } = {
    name: "Mouse",
    price: 1000,
    available: true
};

const product2 = {
    name: "Keyboard",
    price: 1500,
    available: false,
    percentageDiscount: 10
}

function displayProduct(product: { name: string, price: number, available: boolean }) {
    console.log(product.name);
}

displayProduct(product2);

/* 
    Interfaces - describes a structure that an object is expected to follow
*/

interface Product {
    name: string;
    price: number;
    available: boolean;
}

interface ProductWithDiscount extends Product {
    percentageDiscount: number;
}

interface ProductPlusDiscountWithShipping extends ProductWithDiscount {
    shippingAddress: string;
}

const product3: Product = {
    name: "Mouse",
    price: 1000,
    available: true
};

const product4: ProductWithDiscount = {
    name: "Keyboard",
    price: 1500,
    available: false,
    percentageDiscount: 10
}

function displayProductWithInterfaces(product: Product | ProductWithDiscount) {
    console.log(product.name);
}

/*
    Type Alias - gives a reusable name to a type
        Think about as "custom types"
*/
type ProductAlias = {
    name: string;
    price: number;
    available: boolean;
}

type availability = "available" | "unavailable";

type PriceList = number[];

// Tuple (an array w/ two elements) type
type Coordinates = [number, number];

type isOpen = boolean;

/*
    Type Alias vs Interface
    
    Interface
        - primarily, describes object-like structures
        - commonly extended using "extends" keyword
        - Can be used as "contracts" for classes
    Type Alias
        - Represents objects, unions, arrays, tuples

    TS - typescript
    JS - javascript
*/

/*
    Nested objects
*/
// Version 1
interface Course {
    title: string;
    instructor: {
        name: string;
        experience: number;
    }
    learners: string[]
}

const course: Course = {
    title: "Typescript Basics",
    instructor: {
        name: "Nikhil",
        experience: 10
    },
    learners: ["Priyavrat", "Harsh"]
};
// Version 2
interface Instructor {
    name: string;
    experience: number;
}

interface CourseV2 {
    title: string;
    instructor: Instructor;
    learners: string[]
}

/* 
    Optional Properties: 
*/
interface ProductV2 {
    name: string;
    price: number;
    // optional
    description?: string;
}
// What if every product object doesn't have a description?
const product: ProductV2 = {
    name: "Wireless Mouse",
    price: 750,
    description: "This is a wonderful mouse!"
}

function getDescriptionLength(product: ProductV2) {
    // return the length of the product description
    // if(product.description) { ... } else { ...}

    // optional chaining
    return product.description?.length;
}

console.log(getDescriptionLength(product));


/*
    Readonly property: a readonly modifier that prevents a property from being reassigned after the object has been created

    Use cases: Order (orderId)
*/
interface ProductV3 {
    // i want the id to be READ only
    readonly id: number;
    name: string;
    price: number;
    // optional
    description?: string;
}

const productv3: ProductV3 = {
    id: 101,
    name: "Water Bottle",
    price: 200
}

productv3.name = "Plastic Bottle";
productv3.price = 50;
productv3.id = 102;     // invalid!

// In JS, you can do the following and change the value of an id:
const productv4 = {
    id: 101,
    name: "Gift wrap"
};
productv4.id = 102;

// Readonly in nested scenarios
interface UserSettings {
    readonly preferences: {
        // theme: "dark" | "light";
        theme: string;
    }
}

const settings: UserSettings = {
    preferences: {
        theme: "dark"
    }
};
settings.preferences = { theme: "light" };  // not allowed!
settings.preferences.theme = "light";       // permitted!

/*
    Typing Functions
*/

function addTwoNumbers(number1: number, number2: number): number {
    return number1 + number2;
}

// What's the return type of this function?
function findProductName(productId: number): string | null {
    if(productId === 101) {
        return "Cup";   // data type: string
    }
    // here, null is a value!
    return null;        // type: null
}

// what's the return type of this function?
// a function doesn't return anything -> void return type
function showNotification(message: string): void {
    console.log(message);
}

/*
    Arrow function 
*/
const addTwoNumbersArrowFunction = (number1: number, number2: number): number => {
    return number1 + number2;
}
// how can we convert this to a one line arrow function?
const addTwoNumbersOneLiner = (number1: number, number2: number): number => number1 + number2;

const createProductLabel = (product: ProductV3) => {
    const shippingAddress = {
        addressLine1: "123 Temp Road",
        city: "A",
        state: "B",
        country: "India"
    };
    const label = {
        name: product.name,
        address: shippingAddress
    };
    return label;
}

/*
    Optional Parameters
*/
function greet(name: string, title?: string) {
    if(title) {
        return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
}
console.log(greet("Rushikesh", "Mr"));
console.log(greet("Deepanshu", "Dr"));
console.log(greet("Arulprakash"));

/* Default parameters */
function greetV2(name: string, title = "Mr") {
    return `Hello, ${title} ${name}`;
}
console.log(greetV2("Arulprakash"));


