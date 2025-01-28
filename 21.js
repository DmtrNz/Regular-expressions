const input = "IPs: 192.168.1.1, 256.256.256.256, 127.0.0.1, 0.0.0.0, 999.999.999.999";

const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;

const validIPs = input.match(ipRegex).filter(ip => {
    const parts = ip.split('.');
    return parts.every(part => +part >= 0 && +part <= 255);
});

console.log(validIPs); // ["192.168.1.1", "127.0.0.1", "0.0.0.0"]