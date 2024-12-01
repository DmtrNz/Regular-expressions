// Пример 1: Проверка корректности email
const email = "example@example.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = emailPattern.test(email);
console.log(`Email корректен: ${isValidEmail}`);

// Пример 2: Извлечение всех чисел из строки
const text = "В 2023 году было 456 событий, и 78 из них были важными.";
const numbers = text.match(/\d+/g);
console.log(`Извлечённые числа: ${numbers}`);

// Пример 3: Замена всех пробелов на тире
const sentence = "Регулярные выражения полезны.";
const modifiedSentence = sentence.replace(/ /g, "-");
console.log(modifiedSentence);

// Пример 4: Проверка наличия определённого слова в тексте
const paragraph = "JavaScript — это мощный язык программирования.";
const containsWord = /JavaScript/.test(paragraph);
console.log(`Текст содержит слово "JavaScript": ${containsWord}`);

// Пример 5: Удаление всех символов, кроме букв и цифр
const input = "Hello, World! 123.";
const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "");
console.log(`Очищенный ввод: ${cleanedInput}`);
