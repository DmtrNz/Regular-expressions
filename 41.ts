
function replaceWord(text: string, targetWord: string, replacementWord: string): string {
    // Регулярное выражение для поиска всех вхождений слова, игнорируя регистр
    const wordRegex = new RegExp(`\\b${targetWord}\\b`, 'gi');
    return text.replace(wordRegex, replacementWord);
}

// Пример использования функции
const sampleText = `
    Hello world! The world is full of opportunities.
    Let's make the world a better place.
`;

const newText = replaceWord(sampleText, "world", "planet");
console.log("Новый текст:", newText);