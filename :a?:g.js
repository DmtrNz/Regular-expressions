const regex1 = /a?/g;
const strings = [" ","a", "b", "abc"];
strings.forEach(function (s) {
    const result = regex1.test(s);
    console.log(`Строка ${s} соответсвует: ${result}:`);
    console.log(s.match(regex1));
});