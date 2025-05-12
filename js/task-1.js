function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return 'Insufficient funds!';
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(2, 1500, 3000));  // "You ordered 2 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 10000)); // "You ordered 10 droids worth 5000 credits!"
console.log(makeTransaction(10, 5000, 5000)); // "Insufficient funds!"
