var DictionaryEntry = /** @class */ (function () {
    function DictionaryEntry(key, value, description) {
        this._key = key;
        this._value = value;
        this._description = description;
    }
    Object.defineProperty(DictionaryEntry.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DictionaryEntry.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DictionaryEntry.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    return DictionaryEntry;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.entries = [];
    }
    Dictionary.prototype.addEntry = function (entry) {
        this.entries.push(entry);
    };
    Dictionary.prototype.removeEntry = function (key) {
        this.entries = this.entries.filter(function (entry) { return entry.key !== key; });
    };
    Dictionary.prototype.getEntry = function (key) {
        return this.entries.find(function (entry) { return entry.key === key; });
    };
    Dictionary.prototype.getAllEntries = function () {
        return this.entries;
    };
    return Dictionary;
}());
// пример использования
var dictionary = new Dictionary();
dictionary.addEntry(new DictionaryEntry('one', 1, 'число 1'));
dictionary.addEntry(new DictionaryEntry('two', 2, 'число 2'));
console.log(dictionary.getAllEntries()); // [ DictionaryEntry { _key: 'one', _value: 1, _description: 'число 1' }, DictionaryEntry { _key: 'two', _value: 2, _description: 'число 2' } ]
dictionary.removeEntry('one');
console.log(dictionary.getAllEntries()); // [ DictionaryEntry { _key: 'two', _value: 2, _description: 'число 2' } ]
var entry = dictionary.getEntry('two');
console.log(entry === null || entry === void 0 ? void 0 : entry.description); // 'число 2'
