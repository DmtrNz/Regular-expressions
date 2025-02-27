const numbers = "123 456 789";
const sum = numbers.replace(/ /g, '+');
console.log(eval(sum));

const sentence = "JavaScript is fun!";
const words = sentence.split(/\s+/);
console.log(words);

const code = "abc-123-def-456";
const parts = code.split(/-/);
console.log(parts);