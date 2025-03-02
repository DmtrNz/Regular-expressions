function extractPhoneNumbers(text: string): string[] {
    // Регулярное выражение для поиска номеров телефонов
    // Поддерживает форматы: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    const phoneRegex = /\(?\b(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\b/g;
    const matches = [...text.matchAll(phoneRegex)];

    // Форматирование найденных номеров в единый формат
    return matches.map(match => `(${match[1]}) ${match[2]}-${match[3]}`);
}

// Пример использования функции
const sampleText = `
    Вы можете связаться с нами по следующим номерам:
    (123) 456-7890, 987-654-3210, 555.555.5555 и 1112223333.
`;

const phoneNumbers = extractPhoneNumbers(sampleText);
console.log("Найденные номера телефонов:", phoneNumbers);