function extractUrls(text: string): string[] {
    // Регулярное выражение для поиска URL-адресов
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    return [...text.matchAll(urlRegex)].map(match => match[0]);
}

// Пример использования функции
const sampleText = `
    Посетите наш сайт на https://example.com для получения дополнительной информации.
    Также вы можете ознакомиться с нашим блогом на http://blog.example.com.
`;

const urls = extractUrls(sampleText);
console.log("Найденные URL-адреса:", urls);