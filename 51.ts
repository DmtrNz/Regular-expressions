class StringTrimmer {
    // Метод для удаления лишних пробелов
    static trimExtraSpaces(input: string): string {
        return input.replace(/\s+/g, ' ').trim();
    }
}

// Пример использования
const text1 = "   Это   строка  с   лишними   пробелами.   ";
const text2 = "Нормальная строка";

console.log(StringTrimmer.trimExtraSpaces(text1)); // "Это строка с лишними пробелами."
console.log(StringTrimmer.trimExtraSpaces(text2)); // "Нормальная строка"