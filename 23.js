const input = "Prices: $10.99, $0.50, $1000, $5, $invalid, $0.00";

const priceRegex = /\$\d+(\.\d{2})?/g;

const validPrices = input.match(priceRegex);

console.log(validPrices); // ["$10.99", "$0.50", "$1000", "$5", "$0.00"]