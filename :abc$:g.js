const regex = /abc$/g;
const text1 = "это тест abc";
const text2 = "это тест abcx";
const matches1 = regex.test(text1);
const matches2 = regex.test(text2);
console.log(matches1);
console.log(matches2);