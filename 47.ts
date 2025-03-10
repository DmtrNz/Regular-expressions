class User {
    private _name: string;

    // Регулярное выражение для имени: только буквы, начинается с заглавной
    private static NAME_REGEX = /^[A-Z][a-z]*$/;

    constructor(name: string) {
        this._name = this.validateName(name) ? name : "Unknown";
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

    // Метод для валидации имени
    private validateName(name: string): boolean {
        return User.NAME_REGEX.test(name);
    }
}

// Пример использования
const user = new User("Alice");

console.log(user.name); // Alice

user.name = "Bob"; // Корректное имя
console.log(user.name); // Bob

user.name = "alice"; // Ошибка: Invalid name. Name must start with a capital letter and contain only letters.
console.log(user.name); // Bob (значение не изменилось)