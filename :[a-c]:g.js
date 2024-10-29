const regex1 = /[a-c]/g;
const string1 = "apple";
const string2 = "banana";
const string3 = "hello";
const string4 = "cherry";
const string5 = "orange";
console.log(regex1.test(string1));
console.log(regex1.test(string2));
console.log(regex1.test(string3));
console.log(regex1.test(string4));
console.log(regex1.test(string5));

console.log(string1.match(regex1));
console.log(string2.match(regex1));
console.log(string3.match(regex1));
console.log(string4.match(regex1));
console.log(string5.match(regex1));