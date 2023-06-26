"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'David' }, { age: 25 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} items`
    };
}
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
const numbers = new Collection([1, 2, 3]);
numbers.add(2);
numbers.remove(3);
console.log(numbers.items);
//# sourceMappingURL=generic.js.map