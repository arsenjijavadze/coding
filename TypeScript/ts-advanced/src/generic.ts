// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

// const promise = new Promise<number>(resolve => {
//     setTimeout(() => {
//         resolve(21)
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data);
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'David' }, { age: 25 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
//console.log(merged.age);

// =========================
interface ILength {
    length: number;
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `In this object ${value.length} items`
    }
}

// console.log(withCount('Hello TS!'));
// console.log(withCount(['I', 'Am', 'Array']));

//========================

// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }
// const person = {
//     name: 'Dadiv',
//     age: 25,
//     job: 'TS'
// }
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));

//===========================

// class Collection<T extends number | string | boolean > {
//     constructor(private _items: T[] = []) { }

//     add(item: T) {
//         this._items.push(item)
//     }


//     remove(item: T) {
//         this._items = this._items.filter(i => i !== item)
//     }

//     get items(): T[] {
//         return this._items
//     }
// }

// const strings = new Collection<string>(['I', 'Am', 'Strings'])
// strings.add('!');
// strings.remove('Am');
// console.log(strings.items);

// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(2);
// numbers.remove(3);
// console.log(numbers.items);

//=========================

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

///

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars.shift()

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

//ford.model = 'qwer';
