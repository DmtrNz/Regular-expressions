class PasswordChecker {
    // Регулярное выражение для проверки пароля
    private static PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

    // Метод для проверки пароля
    static isValid(password: string): boolean {
        return this.PASSWORD_REGEX.test(password);
    }
}

// Пример использования
const password1 = "StrongPass1";
const password2 = "weak";

console.log(PasswordChecker.isValid(password1)); // true
console.log(PasswordChecker.isValid(password2)); // false