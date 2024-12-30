const numbers = [1, 2, 3, 4, 5, 6];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber);

const words = ["apple", "banana", "cherry", "date"];
const hasWordWithB = words.some(word => /b/.test(word));
console.log(hasWordWithB);

const codes = ["abc123", "def456", "ghi789"];
const hasCodeWithNumber = codes.some(code => /\d/.test(code));
console.log(hasCodeWithNumber);

const sentences = ["Hello world", "JavaScript is fun", "Regular expressions are useful"];
const hasSentenceWithJavaScript = sentences.some(sentence => /JavaScript/.test(sentence));
console.log(hasSentenceWithJavaScript);

const ids = ["id-123", "id-456", "id-789"];
const hasIdWith456 = ids.some(id => /456/.test(id));
console.log(hasIdWith456);