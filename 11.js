const timeString = "14:30";
const isValidTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeString);
console.log(isValidTime);

const licensePlate = "ABC123";
const isValidPlate = /^[A-Z]{3}\d{3}$/.test(licensePlate);
console.log(isValidPlate);

const zipCode = "12345";
const isValidZip = /^\d{5}$/.test(zipCode);
console.log(isValidZip);

const socialSecurityNumber = "123-45-6789";
const isValidSSN = /^\d{3}-\d{2}-\d{4}$/.test(socialSecurityNumber);
console.log(isValidSSN);

const macAddress = "00:1A:2B:3C:4D:5E";
const isValidMAC = /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/.test(macAddress);
console.log(isValidMAC);
