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

export async function showFetchUserAndOrderDetails() {
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