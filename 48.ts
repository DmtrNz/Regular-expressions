class EmailValidator {
    // Регулярное выражение для проверки email
    private static EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Метод для проверки email
    static isValid(email: string): boolean {
        return this.EMAIL_REGEX.test(email);
    }
}

// Пример использования
const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(EmailValidator.isValid(email1)); // true
console.log(EmailValidator.isValid(email2)); // false