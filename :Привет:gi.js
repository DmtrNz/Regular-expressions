const regex1 = /Привет/g;
const text = "Привет, мир, привет, вселенная!";
const matches1 = text.match(regex1);
console.log(matches1);

const regex2 = /Привет/gi;
const matches2 = text.match(regex2);
console.log(matches2);