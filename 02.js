// Пример 5: Определение максимального значения из двух чисел
const a = 15;
const b = 20;
const maxValue = a > b ? a : b;
console.log(`Максимальное значение: ${maxValue}`);

// Пример 6: Проверка наличия элемента в массиве
const fruits = ["яблоко", "банан", "вишня"];
const fruitToCheck = "груша";
const fruitAvailable = fruits.includes(fruitToCheck) ? "Есть в наличии" : "Нет в наличии";
console.log(`${fruitToCheck}: ${fruitAvailable}`);

// Пример 7: Установка класса в зависимости от состояния
const isActive = true;
const buttonClass = isActive ? "active-button" : "inactive-button";
console.log(`Класс кнопки: ${buttonClass}`);

// Пример 8: Выбор сообщения в зависимости от количества элементов
const itemsCount = 5;
const message = itemsCount > 0 ? `В корзине ${itemsCount} товаров` : "Корзина пуста";
console.log(message);

// Пример 9: Установка значения переменной на основе другой переменной
const userRole = "admin";
const canEdit = userRole === "admin" ? "Может редактировать" : "Не может редактировать";
console.log(canEdit);
