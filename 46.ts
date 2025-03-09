class Person1 {
    private _name: string;
    private _age: number;

    // Регулярное выражение для имени: только буквы, начинается с заглавной
    private static NAME_REGEX = /^[A-Z][a-z]*$/;

    // Регулярное выражение для возраста: двузначное число от 0 до 99
    private static AGE_REGEX = /^\d{1,2}$/;

    constructor(name: string, age: number) {
        this._name = this.validateName(name) ? name : "Unknown";
        this._age = this.validateAge(age) ? age : 0;
    }

    // Геттер для имени
    get name(): string {
        return this._name;
    }

    // Сеттер для имени с валидацией
    set name(newName: string) {
        if (this.validateName(newName)) {
            this._name = newName;
        } else {
            console.error("Invalid name. Name must start with a capital letter and contain only letters.");
        }
    }

    // Геттер для возраста
    get age(): number {
        return this._age;
    }

    // Сеттер для возраста с валидацией
    set age(newAge: number) {
        if (this.validateAge(newAge)) {
            this._age = newAge;
        } else {
            console.error("Invalid age. Age must be a two-digit number between 0 and 99.");
        }
    }

    // Метод для валидации имени
    private validateName(name: string): boolean {
        return Person1.NAME_REGEX.test(name);
    }

    // Метод для валидации возраста
    private validateAge(age: number): boolean {
        return Person1.AGE_REGEX.test(age.toString()) && age >= 0 && age <= 99;
    }

    // Метод для вывода информации о человеке
    getInfo(): string {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}

// Пример использования
const Person1 = new Person1("Alice", 25);

console.log(Person1.getInfo()); // Name: Alice, Age: 25

Person1.name = "Bob"; // Корректное имя
Person1.age = 30; // Корректный возраст

console.log(Person1.getInfo()); // Name: Bob, Age: 30

// Попытка установить некорректные значения
Person1.name = "alice"; // Ошибка: Invalid name. Name must start with a capital letter and contain only letters.
Person1.age = 150; // Ошибка: Invalid age. Age must be a two-digit number between 0 and 99.

console.log(Person1.getInfo()); // Name: Bob, Age: 30 (значения не изменились)