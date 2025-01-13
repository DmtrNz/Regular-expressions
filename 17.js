const input = "123-45-6789, 000-00-0000, 987-65-4321, 123-456-789, 12-345-6789";

const ssnRegex = /\b\d{3}-\d{2}-\d{4}\b/g;

const validSSNs = input.match(ssnRegex);

console.log(validSSNs); // ["123-45-6789", "987-65-4321"]