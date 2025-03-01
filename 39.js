
const currency = "$123.45";
const isValidCurrency = /^\$\d+(\.\d{2})?$/.test(currency);
console.log(isValidCurrency);

const domain = "example.com";
const isValidDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
console.log(isValidDomain);
