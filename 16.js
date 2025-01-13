const input = "test@example.com, user@domain, invalid-email, another@test.com, @no-domain.com";

// Регулярное выражение для поиска корректных email-адресов
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Ищем все совпадения в строке
const validEmails = input.match(emailRegex);

console.log(validEmails); // Вывод: ["test@example.com", "another@test.com"]