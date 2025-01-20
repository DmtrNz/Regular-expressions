const input = "Colors: #FF5733, #33FF57, #3357FF, #ZZZ, #123456, #ABCDEF";

const hexColorRegex = /#[0-9A-Fa-f]{6}\b/g;

const validColors = input.match(hexColorRegex);

console.log(validColors); // ["#FF5733", "#33FF57", "#3357FF", "#123456", "#ABCDEF"]