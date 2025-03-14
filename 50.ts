class PhoneNumberFormatter {
    // Регулярное выражение для форматирования номера телефона
    private static PHONE_REGEX = /^(\d{3})(\d{3})(\d{4})$/;

    // Метод для форматирования номера телефона
    static format(phoneNumber: string): string {
        const match = phoneNumber.match(this.PHONE_REGEX);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return "Invalid phone number";
    }
}

// Пример использования
const phone1 = "1234567890";
const phone2 = "12345";

console.log(PhoneNumberFormatter.format(phone1)); // (123) 456-7890
console.log(PhoneNumberFormatter.format(phone2)); // Invalid phone number