let user: [string, number] = ['john', 31];
console.log(user[0]);
console.log(user[1]);

let year: [number, number] = [2019, 3];
let year1: [number, string] = [2020, 'september'];

// read only tupel
let time: readonly [number, number, number] = [12, 59, 59];

//

let userNew: [string, number, boolean?];
userNew = ['john', 31, true];
userNew = ['David', 35];

//

let timeX: [number, number, number] = [12, 59, 59];
let [hour, minute, second] = timeX;
console.log(hour, minute, second);

//

let tpl: [string, ...number[]];
tpl = ['str', 1, 2, 3, 4, 5];

let tpl1: [string, string, ...number[]];
tpl1 = ['one', 'two', 12, 854, 77];

let tpl2: [number, boolean, ...string[]];
tpl2 = [7, false, '12', 'User'];
console.log(tpl2);








