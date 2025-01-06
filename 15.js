const emails = [
    "user@example.com",
    "admin@website.org",
    "support@company.co",
    "invalid-email",
    "another.invalid@email",
    "contact@domain"
];

const validEmails = emails.filter(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
console.log(validEmails);