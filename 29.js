const input = "Domains: example.com, sub.domain.org, invalid-domain, test.co.uk, no-dot";

const domainRegex = /\b[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+\b/g;

const validDomains = input.match(domainRegex);

console.log(validDomains); // ["example.com", "sub.domain.org", "test.co.uk"]