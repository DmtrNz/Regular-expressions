const input = "Hex codes: 0xFF, 0x1A3, 0xZZZ, 0x0, 0xABCD";

const hexCodeRegex = /0x[0-9A-Fa-f]+/g;

const validHexCodes = input.match(hexCodeRegex);

console.log(validHexCodes); // ["0xFF", "0x1A3", "0x0", "0xABCD"]