// Пример 1: Проверка чётности числа
const number = 10;
const isEven = number % 2 === 0 ? "Чётное" : "Нечётное";
console.log(`Число ${number} является ${isEven}.`);

// Пример 2: Определение доступа пользователя
const userAge = 20;
const accessGranted = userAge >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log(accessGranted);

// Пример 3: Выбор приветствия в зависимости от времени суток
const hour = new Date().getHours();
const greeting = hour < 12 ? "Доброе утро" : hour < 18 ? "Добрый день" : "Добрый вечер";
console.log(greeting);

// Пример 4: Установка значения по умолчанию
const userName = "";
const nameToDisplay = userName ? userName : "Гость";
console.log(`Привет, ${nameToDisplay}!`);
