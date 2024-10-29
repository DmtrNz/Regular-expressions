const regex = /ab/;
const string1 = "Я ищу ABC в этом тексте";
const string2 = "здесь нет искомой abcABC последовательности";
console.log(regex.test(string1));
console.log(regex.test(string2));