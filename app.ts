type EntryValue = string | number | boolean;

class DictionaryEntry<T extends EntryValue> {
  private _key: string;
  private _value: T;
  private _description: string;

  constructor(key: string, value: T, description: string) {
    this._key = key;
    this._value = value;
    this._description = description;
  }

  public get key(): string {
    return this._key;
  }

  public set key(value: string) {
    this._key = value;
  }

  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    this._value = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}

class Dictionary<T extends EntryValue> {
  private entries: DictionaryEntry<T>[] = [];

  public addEntry(entry: DictionaryEntry<T>): void {
    this.entries.push(entry);
  }

  public removeEntry(key: string): void {
    this.entries = this.entries.filter((entry) => entry.key !== key);
  }

  public getEntry(key: string): DictionaryEntry<T> | undefined {
    return this.entries.find((entry) => entry.key === key);
  }

  public getAllEntries(): DictionaryEntry<T>[] {
    return this.entries;
  }
}

// пример использования
const dictionary = new Dictionary<number>();
dictionary.addEntry(new DictionaryEntry('one', 1, 'число 1'));
dictionary.addEntry(new DictionaryEntry('two', 2, 'число 2'));

console.log(dictionary.getAllEntries()); // [ DictionaryEntry { _key: 'one', _value: 1, _description: 'число 1' }, DictionaryEntry { _key: 'two', _value: 2, _description: 'число 2' } ]

dictionary.removeEntry('one');

console.log(dictionary.getAllEntries()); // [ DictionaryEntry { _key: 'two', _value: 2, _description: 'число 2' } ]

const entry = dictionary.getEntry('two');
console.log(entry?.description); // 'число 2'
