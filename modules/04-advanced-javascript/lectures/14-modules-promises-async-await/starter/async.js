/*
1. Asynchronous Javascript

Javascript is a synchronous language.
*/

let b = 5;
let k = 6;
let a = b + k;
console.log(a);

// get youtube videos for your feed
getRecommendedVidoes(); // 2 seconds

console.log("b");


/*
    Asynchronous Javascript - allows an operation to begin now and complete later.
    - Network requests
    - Reading files
    - Database operations - saving data, updating data, etc
    - Loading images, or other heavy assets

    How does this work in JS?
    Start an operation -> continue with other work -> handle the result when it becomes available
*/

// A delayed JS opertion
console.log("Customer placed an order");    // A

// waiter cannot serve the customer immediately - delay
// simulate it - setTimeout(function, delay)
setTimeout(() => {
    console.log("Order is ready");  // B
}, 5000)

console.log("Waiter serves another customer");  // C

/*
JS - sync programming language
Runs on a main thread

An operation that requires more time -- 5s, 0s
    Immediately pushes that onto a separate thread
*/

/* scenario: open up an application - load user data 8 */
console.log("1. Application started");

// load user data
setTimeout(() => {
    console.log("4. User data loaded");
}, 2000);

console.log("2. Loading user data");

// show a loading message
setTimeout(() => {
    console.log("3. Showing loading message");
}, 0);

console.log("5. Application setup completed");

/*
    order of the output? 
*/

/*
    Callbacks: a function passed as an argument to another function, so that the receiving function can execute it later.
*/
// Example 1
function greet() {
    console.log("hello");
}

// task is a function data type
// task is a callback funtion
function runTask(task) {
    // execute the task
    task();
}

runTask(greet); // we're passing the reference to greet. we're not passing greet(), but "greet"



// Example 2
// accept an input value of type number and a callback function
function processValue(value, callback) {
    callback(value);
}

processValue(10, function(number) { 
    console.log(number * 2);
});
/*
Flow:
    processValue is invoked with two arguments: 10, callback function
        processValue invoked the callback with 10
            callback will print console.log(number * 2) where number is 10
*/


/*
Login into Gmail
    - fetch primarily emails    (task 1)
    - fetch chat related info   (task 2)
    - fetch promotional emails  (task 3)
*/

// Example 3
// preparing some order - sandwich
function prepareOrder(callback) {
    // kitchen receives
    console.log("Preparing the order");

    // making the sandwich takes time!
    // 2000 milliseconds to make the sandwich
    setTimeout(() => {
        // order being prepared
        const order = "sandwich";
        callback(order);
    }, 2000);
}

function serveCustomer(dish) {
    // Template literals
    console.log(`Order is ready: ${dish}`);
}

prepareOrder(serveCustomer);

// What's the error?
// Scenario: load user information

function loadUser(callback) {
    console.log("1. Starting user request");

    // simulate a delay
    setTimeout(() => {
        console.log("3. User request completed");
        // a user object
        const user = {
            id: 1,
            name: "Harsh"
        };
        callback(user);
    }, 2000);
}
console.log("2. Application started");

loadUser(() => {
    console.log("4. User: ", user.name);
});

console.log("5. Application continues...");

/*
    Promises
        Why do we need Promises?
            Callback can becomes difficult to read as the complexity of your codebase increases
            Promises provide another way to represent an asynchronous result
        Define
            An object that represents the eventual result of an aysnc operation.
            The result becomes available:
                - successful
                - unsuccessful
                - pending
            Promise is NOT the result

        
        The three Promises states

        State
            Pending: the operation is in progress
                Eg: the order is preparing...)
            Fulfilled: the opertion is successfully completed
                Eg: the order is ready!)
            Rejected: the operation has filed!
                Eg: the order could not be prepared)
*/
// a promise is created using the "new" keyword
// we invoke the constructor using "new Promise(...)"
// the constructor of a Promise requires a callback function as the input
const orderPromise = new Promise((resolve, reject) => {
    // start an async operation
});

/*
    resolve - a function that's invoked when the operation succeeds
    reject - a function that's invoked when the operation fails
*/

// a successful promise
const orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Order is ready");
    }, 1500);
});

orderPromise.then((message) => {
    console.log(message);
});

// Promises in a function
function prepareOrder() {
    // we're returning an object of type Promise    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order is ready");
        }, 1500);
    });
}
prepareOrder(); // is a promise, not a result!

prepareOrder().then((message) => {
    console.log(message);
});


// Promises that fail (reject)
function prepareOrder() {
    return new Promise((resolve, reject) => {
        // if kitchen is open, we can prepare the order - resolve
        // if kitchen is close, we cannot prepare the order - reject
        const kitchenOpen = false;
        
        setTimeout(() => {
            if(kitchenOpen === true) {
                resolve("Order is ready");
            } else {
                // we're constructing an error object 
                // with a message
                reject(new Error("The kitchen is closed"));
            }
        }, 1500);
    });
}

// then is to handle resolve (success)
prepareOrder()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        // console.log(error);
        console.log(error.message);
    });


// Exercise
function checkStock(productName) {
    return new Promise((resolve, reject) => {
        const inStock = true;

        setTimeout(() => {
            if(inStock === true) {
                resolve(`${productName} is available`);
                // resolve("Product is available");
            } else {
                reject(new Error(`${productName} is unavailable`));
                // reject(new Error("Product is unavailable"));
            }
        }, 1000);
    });
}

checkStock("Keyboard")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });


// Promise Chaining - connecting multiple .then() calls so that the result of one step can be used by the next step

// Use case with Promise chaining -- login to youtube: authenticated, recommendations, alerts

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Aditya"
            };
            resolve(user);
        }, 1000);
    });
}

function getOrderDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                id: 1,    // value of the id property is whatever is the value of orderId
                userId: userId,
                item: "Keyboard",
                status: "Delivered"
            };
            resolve(order);
        }, 1000);
    });
}

getUser()
    .then((user) => {
        console.log("User: ", user.name);
        // user.id;    // NOT returning a value; if we don't return, the next call in the chain receives "undefined"
        return user.id;
    })
    .then((userId) => {
        return getOrderDetails(userId);
    })
    .then((orderDetails) => {
        console.log("Order details: ", orderDetails);
    })
    .catch((error) => {
        console.log(error);
    });

/**
    Aync/Await

    Why do we need async and await?
        Promise chaining provides a structured way to connect async operations.
        However, when a workflow contains several dependent steps -> Promise chaining can make your code difficult to read.

    
*/

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Aditya"
            };
            //resolve(user);
            reject(new Error("User not found!"));
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ordersForUser = [
                { id: 101, userId: userId, item: "Keyboard" }
            ];
            resolve(ordersForUser);
        }, 1000);
    })
}

function getOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                id: 1,    // value of the id property is whatever is the value of orderId
                item: "Keyboard",
                status: "Delivered"
            };
            resolve(order);
        }, 1000);
    });
}

async function showFetchUserAndOrderDetails() {
    // try/catch

    try {
        // get the user
        const user = await getUser();   // wait until getUser returns a response
        // get the orders for the user
        const orders = await getOrders(user.id);
        // get the order details for one order
        // orders sub [] zero-th index -> access the id property
        const details = await getOrderDetails(orders[0].id);
        
        console.log(user);
        console.log(orders);
        console.log(details);
    } catch(error) {
        console.log(error.message);
    }
}

showFetchUserAndOrderDetails();

/**
    What does async mean?
        A keyword that marks a function as asynchronous and ensures that the function returns a Promise

        Example 1: 
            async function getMessage() {
                return "Hello";
            };
            const result = getMessage();    // result is now a Promise
        Example 2: 
            Replace return "Hello" with...
            
            async function getMessage() {
                return Promise.resolve("Hello");
            };
            getMessage().then((message) => {
                console.log(message);
            });

        What does await mean?
            Definition
                A keyword that waits for a Promise to resolve (aka settle) and provides the result.
            Example:
                const user = await getUser();
                console.log(user);
 */