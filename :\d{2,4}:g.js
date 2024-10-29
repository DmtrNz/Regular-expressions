const regex = /\d{2,4}/g;
const text = "В этом тексте есть 1, есть 12, 1234, 12345, 123456 ещё столько !55 цифр";
const matches =  text.match(regex);
console.log(matches);