const hexValue = "#FF5733";
const isValidHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(hexValue);
console.log(isValidHexColor);

const postalCode = "SW1A 1AA";
const isValidPostal = /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/.test(postalCode);
console.log(isValidPostal);

const currency = "$123.45";
const isValidCurrency = /^\$\d+(\.\d{2})?$/.test(currency);
console.log(isValidCurrency);

const domain = "example.com";
const isValidDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain);
console.log(isValidDomain);

const coordinate = "51.5074° N, 0.1278° W";
const isValidCoordinate = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(coordinate);
console.log(isValidCoordinate);
