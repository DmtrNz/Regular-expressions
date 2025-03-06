function stripHtmlTags(htmlString: string): string {
    // Регулярное выражение для поиска HTML-тегов
    const htmlTagsRegex = /<\/?[^>]+(>|$)/g;
    return htmlString.replace(htmlTagsRegex, '');
}

// Пример использования функции
const sampleHtml = `
    <div>
        <h1>Заголовок</h1>
        <p>Это пример <strong>текста</strong> с HTML-тегами.</p>
    </div>
`;

const plainText = stripHtmlTags(sampleHtml);
console.log("Текст без HTML-тегов:", plainText);