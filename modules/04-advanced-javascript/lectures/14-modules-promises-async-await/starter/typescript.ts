/**
    Typescript

    Valid JS:
    let username;               // declaration
    username = "Priyanka";      // assignment

    Typescript is a programming language created to make JS development safer and easier to manage, particularly as the applications grow larger.


    let username: string;               // declaration
    username = "Priyanka";              // assignment
    username = 10;                      // Typescript says: "Error!"

    "type" is all about the JS data types we've learned, including:
        string,
        number,
        boolean, etc

    Typescript (TS) is a "superset" of Javascript (JS)
        Typescript supports most valid Javascript code.
        Most valid JS code can be valid TS code, but not the other way around

        Pure JS:
        function calculateTotal(quantity, price) {
            return quantity * price;
        }

        TS:
        function calculateTotal(quantity: number, price: number) {
            return quantity * price;
        }
*/

/**
    Typescript is not executed in the browser. The browser only executes Javascript.

    The Typescript code we write goes through a process:
        TS code -> Type checking -> Javascript code -> Browser or JS environments
        TS has a compiler that check the code and produces the JS

        Transpilation
            Converting your code from a high-level language into another similar high-level language.

        Compilation (Java, C++, etc)
*/


// Other types in TS
let value: number = 5;
let myName: string = "Nikhil";
let isAvailable: boolean = false;

// Parts of a function include the return type
function calculateTotal(quantity: number, price: number): number {
    return quantity * price;
}

let topics: string[] = ["HTML", "CSS", "Javascript"];
// topics = [1,2,3];       // TS Error: Type 'number' is not assignable to type 'string'
topics = ["1","2","3"];

// Default array syntax
let ids: number[] = [123, 124, 125];
// Generic syntax
let idsWithDiffAnnotation: Array<number> = [123, 124, 125];

// An array with two elements - tuple
let array1: [number, string] = [1, "test"];

// let movie: Object = {        // NOT ideal

// Type Alias
type Address = {
    addressLine1: string;
    city: string;
    state: string;
    pinCode: number;
}

type Movie = {
    name: string;
    type: string;
    skills: string[];
    // address: any;       // any type will tell TS NOT to enforce any of the type rules
    address: Address;
}

let movie: Movie = {
    name: "Rajanandhini",
    type: "learner",
    skills: ["HTML", "CSS", "JS"],
    address: {
        addressLine1: "test",
        city: "test",
        state: "test",
        pinCode: 12345
    }
}

type ActionMovie = {
    title: string;
    director: string;
    stuntCoordinator: string;
}

type DramaMovie = {
    title: string;
    director: string;
}

interface IMovie {
    title: string;
    director: string;
}
// inheritance
interface IActionMovie extends IMovie {
    stuntCoordinator: string;
}
// My goal: Specific kinds of movies and their details

// inline typing
let person: { id: number, name: string } = { id: 123, name: "Nikhil"}

// Represent an animal
type Animal = {
    name: string,
    species: string
};

type Dog = {
    name: string,
    species: string
};

// Car -> different kinds of car; Building...
// parent
interface IAnimal {
    name: string;
    species: string;
    sound(): void;
}

const animal: IAnimal = {
    name: "a",
    species: "b",
    sound() {
        console.log(`${this.name} makes a sound!`);
    }
}

animal.sound();

/*
    Types of inheritance in TS: 
        Single
        Multi
        Multilevel
        Hierarchical
*/

interface Pet {
    ownerName: string;
    residence: string;
}

// child
// IDog inherits name and species from IAnimal
interface IDog extends IAnimal, Pet {
    // perform an action: bark
    // functionName(): returnType;
    bark(): void;
}

const myDog: IDog = {
    name: "Lassy",
    species: "German Shepherd",
    ownerName: "Priyanka",
    residence: "test",
    bark() {
        console.log(`${this.name}` + " is barking!");
    },
    sound() {
        console.log("Test");
    }
}

myDog.bark();

/*
    Union: a variable, function, parameter or return value can be one of multiple types.
*/
let id: string | number;
id = "school name: 123";    // string
id = 1;                     // number
id = true;                  // error!

