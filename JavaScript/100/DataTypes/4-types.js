'use strict'

const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

const person = {
    name: 'Marcus Aurelius',
    born: 121,
    city: 'Roma',
    position: 'emperor'
};

person.city = 'Odessa';

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiyv', 'Riga'];

cities.push('Odessa'); // add in the end
cities.unshift('New York'); // add in the start

console.log('shift: ' + cities.shift()); // 'New York'
console.log('pop: ' + cities.pop()); // 'Odessa'

console.log({ i }, typeof i);
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log({ person }, typeof person);
console.log({ isArray: Array.isArray(person) });

console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });




