const regex = /^Привет/g;
const text1 = "Привет, как дела?";
const text2 = "Дима, Привет!";
const matches1 = regex.test(text1);
const matches2 = regex.test(text2);
console.log(matches1);
console.log(matches2);