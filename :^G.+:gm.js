const regex = /^G.+/gm;
const text = `
Hello world
This is a test
Goodbye World`;

const matches = text.match(regex);
console.log(matches);