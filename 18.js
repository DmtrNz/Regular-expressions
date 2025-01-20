const input = "Phone: +1-800-555-1234, +44-20-7946-0958, +7-495-123-45-67, invalid-phone";

const phoneRegex = /\+\d{1,3}-\d{1,4}-\d{2,4}-\d{2,4}-\d{2,4}/g;

const validPhones = input.match(phoneRegex);

console.log(validPhones); // ["+1-800-555-1234", "+44-20-7946-0958", "+7-495-123-45-67"]