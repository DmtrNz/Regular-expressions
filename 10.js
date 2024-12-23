const code = "abc123xyz";
const hasLettersAndNumbers = /[a-z]/.test(code) && /[0-9]/.test(code);
console.log(hasLettersAndNumbers);

const urlPath = "/user/profile";
const isProfilePath = /\/user\/profile$/.test(urlPath);
console.log(isProfilePath);

const version = "v1.2.3";
const isValidVersion = /^v\d+\.\d+\.\d+$/.test(version);
console.log(isValidVersion);

const sentence = "The quick brown fox jumps over the lazy dog.";
const wordCount = sentence.trim().split(/\s+/).length;
console.log(wordCount);

const binary = "101010";
const isBinary = /^[01]+$/.test(binary);
console.log(isBinary);
