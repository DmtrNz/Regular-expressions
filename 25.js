const input = "Times: 12:34, 23:59, 00:00, 99:99, 1:23, 12:3";

const timeRegex = /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g;

const validTimes = input.match(timeRegex);

console.log(validTimes); // ["12:34", "23:59", "00:00", "1:23"]