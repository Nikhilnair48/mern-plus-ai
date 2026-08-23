const course1 = {
    title: "Mastering Typescript",
    duration: 3,
    describe() {
        return `${this.title} lasts ${this.duration} hours`
    }
}
// return type: string. return value: 
console.log(course1.describe());

/*
const describeReference = function describe() {
    return `${this.title} lasts ${this.duration} hours`
};
*/
const describeReference = course1.describe;
console.log(describeReference());   // the context to course1 object is lost!


const course2 = {
    title: "Mastering Databases",
    duration: 5,
    describe() {
        return `${this.title} lasts ${this.duration} hours`
    }
}

/*
    Classes are reusable definition for creating objects; they share a common structure and behavior.

    What can a class describe?
        - the data each object should store
        - how that data should be initialized
        - actions each object can perform
    Classes are often described as "blueprints"

    For example: a Course class
*/
class Course {
    title: string;
    duration: number;

    constructor(initialTitle: string, initialDuration: number) {
        this.title = initialTitle;
        // Error: Type 'number' is not assignable to type 'boolean
        // this.duration = initialDuration;
        this.duration = initialDuration;
    }
    describe() {
        return `${this.title} lasts ${this.duration} hours`;
    }
}

// declare a variable, typescriptCourse
// instantiate it with the "new" keyword -> creating an instance of the Class
const typescriptCourse = new Course("Mastering Typescript", 3);
const javascriptCourse = new Course("Mastering Javscript", 2);

/*
    Access Modifiers: control how class properties and methods can be accessed
    Three access modifiers:
        - public is the default
        - private
        - protected (later!)
*/

class Member {
    public name: string;
    // parameterized constructor
    constructor(name: string) {
        this.name = name;   // this will assign the parameter "name" to the class variable "this.name"
    }
    public greet(): string {
        return "Hello " + this.name;
    }
}
// created an instance of class, Member
const member = new Member("Aman");
console.log(member.name);
console.log(member.greet());
member.name = "Nikhil";


class BankAccount {
    public owner: string;
    private balance: number;

    // two parameters
    constructor(ownerName: string, bankBalance: number) {
        // initialize
        this.owner = ownerName;
        this.balance = bankBalance;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account1 = new BankAccount("Rajanandhini", 1000);
console.log(account1.owner);
console.log(account1.balance);  // invalid!
console.log(account1.getBalance());     // Prints: 1000

/*
    Generics
*/

function getFirstNumber(items: number[]): number {
    return items[0];
}
const firstNumber = getFirstNumber([1,2,3]);    // 1

function getFirstString(items: string[]): string {
    return items[0];
}
const firstString = getFirstString(["a", "b", "c"]);    // "a"
// what about accessing the first product in a products array, user in a users array,...

// Unsafe manner to handle this in TS: using "any" as a type
// any - telling TS compiler to SKIP the type-checking for this parameter
function getFirst(items: any[]): any {
    return items[0];
}

// generic type: allows the code to work with different types while preserving the information about the "actual" being used
// T doesn't eliminate type checking like "any." Variable remembers the exact type you passed into it
function getFirstV2<T>(items: T[]): T {
    return items[0];
}

const firstNumberV2 = getFirstV2([1,2,3]);
const firstStringV2 = getFirstV2(["a", "b", "c"]);

/*
    What does T mean?
        T is type parameter
        It acts as a placeholder for a type that will be determined when the function is used
*/

/*
Generics with interfaces
// Request & Response
interface HttpResponse {
    data: YoutubeVideo[];   // Reels[], SearchResults[], failture: data is an empty array
    success: boolean;
    message?: string;
}
*/

interface HttpResponse<T> {
    data: T[];
    success: boolean;
    message?: string;
}

/*
    Generics with type alias
    type Result = {
        value: string;  // can be a number, boolean, etc
        error: string | null;       // valid: string, invalid: null type
    }
*/
type Result<T> = {
    value: T;
    error: string | null;       // valid: string, invalid: null type
}

/* Generics w/ Class */
class Box<T> {
    private contents: T;

    constructor(initialValue: T) {
        this.contents = initialValue;
    }

    // to read the contents of the box
    getContents(): T {
        return this.contents;
    }

    // to update the contents of the box
    updateContents(newContents: T): void {
        this.contents = newContents;
    }
}

// const stringBox = new Box("Hello");  // valid -> type inference will be used to determine the type
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContents());   // "Hello"
stringBox.updateContents("Byee");
console.log(stringBox.getContents());   // "Byee"