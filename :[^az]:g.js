const regex1 = /[^az]/g;
const string1 = "abcdefgijllmno1412+=-";
console.log(regex1.test(string1));

console.log(string1.match(regex1));
