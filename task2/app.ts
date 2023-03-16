class StringGenerator {
    private values: string[];
  
    constructor(...values: string[]) {
      this.values = values;
    }
  
    *generate(): IterableIterator<string> {
      for (let i = 0; i < this.values.length; i++) {
        if (!isNaN(Number(this.values[i]))) { // Проверка на числовое значение
          console.error(`Ошибка: ${this.values[i]} - числовое значение.`);
          break;
        }
        yield this.values[i];
      }
    }
  }
  
  // Пример использования класса
  const generator = new StringGenerator("apple", "banana", "cherry", "42", "date");
  const iterator = generator.generate();
  let result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
  