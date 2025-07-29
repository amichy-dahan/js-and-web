// Simulated inventory database
const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 2 }, // Out of stock
    'monitor': { price: 299, stock: 0 }
};

function checkInventory(items) {
    return new Promise((resolve, reject) => {
        let bool = false;
        setTimeout(() => {
            for (const key in items) {
                if (items[key].stock === 0) {
                    reject(new Error(`this item is out of the stock ${key}`))
                    bool = true;
                }
            }
            if (bool) {

            } else {
                resolve(items)
            }

        }, 500)
    })
}
checkInventory(inventory).then(res => console.log(res)).catch(err => console.log(err.message))




function calculateTotal(items) {
    return new Promise((resolve, reject) => {
        let subtotal = 0;
        let tax = 0;
        let total = 0
        setTimeout(() => {
            for (const key in items) {
                subtotal += items[key].price;
            }
            tax = subtotal * 0.08;
            total = subtotal + tax;
            resolve({ subtotal: subtotal, tax: tax, total: total })
        }, 200)
    })
}
calculateTotal(inventory).then(res => console.log(res))





function processPayment(amount) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.9) {
                resolve({ transactionId: 200, amount: amount, status: 'success' });
            } else {
                reject(new Error("Payment failed. Please try again."))
            }

        },1500)


    })
}

processPayment(100).then(res => console.log(res)).catch(err => console.log(err.message))
let order = [
  { item: 'laptop', quantity: 2 },
  { item: 'mouse', quantity: 2 }
];
for (const key of order) {
    console.log(key.item)
}

function updateInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 300ms
    // 2. Reduces stock for each item
    // 3. Resolves with updated inventory status
    
   return new Promise((resolve, reject) => {

        setTimeout(() => {
           
            let

    
        },300)


    })
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
    // TODO: Implement the complete checkout flow
}

// // Test cases:
// checkout(['laptop', 'mouse'])           // Should succeed
//   .then(result => console.log('Order success:', result))
//   .catch(error => console.log('Order failed:', error.message));

// checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
//   .then(result => console.log('Order success:', result))
//   .catch(error => console.log('Order failed:', error.message));

// checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
//   .then(result => console.log('Order success:', result))
//   .catch(error => console.log('Order failed:', error.message));