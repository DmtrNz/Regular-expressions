const text = "apple, banana, cherry";
const fruits = text.split(/, /);
console.log(fruits);

const word = "javascript";
const upperCaseWord = word.replace(/^./, match => match.toUpperCase());
console.log(upperCaseWord);

const numberString = "123456";
const isSixDigits = /^\d{6}$/.test(numberString);
console.log(isSixDigits);

const date = "2024-12-05";
const formattedDate = date.replace(/-/g, '/');
console.log(formattedDate);

const message = "Hello, how are you?";
const hasQuestion = /\?$/.test(message);
console.log(hasQuestion);
