const input = "Coordinates: 40.7128° N, 74.0060° W, -33.8688° S, 151.2093° E, invalid-coord";

const coordRegex = /-?\d{1,3}\.\d{1,6}° [NSEW]/g;

const validCoords = input.match(coordRegex);

console.log(validCoords); // ["40.7128° N", "74.0060° W", "-33.8688° S", "151.2093° E"]