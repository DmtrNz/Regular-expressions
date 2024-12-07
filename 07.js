const str = "1a2b3c4d5e";
const onlyNumbers = str.replace(/\D/g, '');
console.log(onlyNumbers);

const word = "racecar";
const isPalindrome = word === word.split('').reverse().join('');
console.log(isPalindrome);

const ipAddress = "192.168.0.1";
const isValidIP = /^(\d{1,3}\.){3}\d{1,3}$/.test(ipAddress);
console.log(isValidIP);

const hexColor = "#A1B2C3";
const isValidHex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(hexColor);
console.log(isValidHex);

const camelCase = "convertThisToCamelCase";
const snakeCase = camelCase.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`);
console.log(snakeCase);
