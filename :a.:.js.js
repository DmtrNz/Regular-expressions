const regex1 = /a./;
const string1 = "apple";
const string2 = "banana";
const string3 = "pear";
console.log(regex1.test(string1));
console.log(regex1.test(string2));
console.log(regex1.test(string3));

const regex2 = /.a/;
console.log(regex2.test(string1));
console.log(regex2.test(string2));
console.log(regex2.test(string3));