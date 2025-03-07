class SliderComponent {
    private _value1: number;
    private _value2: number;

    constructor(value1: number = 0, value2: number = 100) {
        this._value1 = value1;
        this._value2 = value2;
    }

    // Геттер для value1
    get value1(): number {
        return this._value1;
    }

    // Сеттер для value1
    set value1(newValue: number) {
        if (newValue >= 0 && newValue <= 100) {
            this._value1 = newValue;
        } else {
            console.error("Value1 must be between 0 and 100");
        }
    }

    // Геттер для value2
    get value2(): number {
        return this._value2;
    }

    // Сеттер для value2
    set value2(newValue: number) {
        if (newValue >= 0 && newValue <= 100) {
            this._value2 = newValue;
        } else {
            console.error("Value2 must be between 0 and 100");
        }
    }

    // Метод для изменения значений слайдеров
    changeValues(newValue1: number, newValue2: number): void {
        this.value1 = newValue1;
        this.value2 = newValue2;
    }

    // Метод для получения текущих значений в виде строки
    getValuesAsString(): string {
        return `Value1: ${this._value1}, Value2: ${this._value2}`;
    }
}

// Пример использования
const slider = new SliderComponent();

console.log(slider.getValuesAsString()); // Value1: 0, Value2: 100

slider.value1 = 20;
slider.value2 = 80;

console.log(slider.getValuesAsString()); // Value1: 20, Value2: 80

slider.changeValues(30, 70);

console.log(slider.getValuesAsString()); // Value1: 30, Value2: 70