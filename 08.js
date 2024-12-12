const time = "12:45 PM";
const isAfternoon = /PM$/.test(time);
console.log(isAfternoon);

const username = "user123";
const isValidUsername = /^[a-zA-Z0-9]{5,15}$/.test(username);
console.log(isValidUsername);

const cssColor = "rgb(255, 255, 255)";
const isRGB = /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/.test(cssColor);
console.log(isRGB);

const filePath = "/home/user/file.txt";
const fileName = filePath.match(/\/([^\/]+)$/)[1];
console.log(fileName);

const fullName = "John Doe";
const initials = fullName.replace(/(\w)\w*\s*/g, '$1').toUpperCase();
console.log(initials);
