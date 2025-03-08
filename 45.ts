class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Геттер для имени
    get name(): string {
        return this._name;
    }

    // Сеттер для имени
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Name cannot be empty");
        }
    }

    // Геттер для возраста
    get age(): number {
        return this._age;
    }

    // Сеттер для возраста
    set age(newAge: number) {
        if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.error("Age must be between 0 and 120");
        }
    }

    // Метод для вывода информации о человеке
    getInfo(): string {
        return `Name: ${this._name}, Age: ${this._age}`;
    }
}

// Пример использования
const person = new Person("Alice", 25);

console.log(person.getInfo()); // Name: Alice, Age: 25

person.name = "Bob"; // Изменяем имя
person.age = 30; // Изменяем возраст

console.log(person.getInfo()); // Name: Bob, Age: 30

// Попытка установить некорректные значения
person.name = ""; // Ошибка: Name cannot be empty
person.age = 150; // Ошибка: Age must be between 0 and 120

console.log(person.getInfo()); // Name: Bob, Age: 30 (значения не изменились)