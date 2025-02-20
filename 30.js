const input = "MAC addresses: 00:1A:2B:3C:4D:5E, 00-1A-2B-3C-4D-5E, invalid-mac, 00:1A:2B:3C:4D";

const macRegex = /\b([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})\b/g;

const validMACs = input.match(macRegex);

console.log(validMACs); // ["00:1A:2B:3C:4D:5E", "00-1A-2B-3C-4D-5E"]