// for (let i: number = 0; i <= 10; i++) {
//     console.log(i);
// }

// let arrX: number[] = [1, 2, 3, 4, 5];

// for (let elem of arrX) {
//     console.log(elem);
// }

// let obj = { a: 1, b: 2, c: 3 };

// for (let key in obj) {
//     console.log(key);
// }

//* Ex 1/ 6
let res: number = 0;

for (let i: number = 0; i < 100; i++) {
    res += i;
}

console.log(res);

//* Ex 2/ 6
let i: number = 0;
let res1: number = 0;

while (i < 100) {
    res1 += 1;
    i++;
}

console.log(res);

//* Ex 3/ 6
let arrY: number[] = [1, 2, 3, 4, 5];
let resY: number = 0;

for (let elem of arrY) {
    resY += elem;
}

console.log(resY);

//* Ex 4/ 6
let obj = { a: 1, b: 2, c: 3 };
let resZ: number = 0;

for (let key in obj) {
    let elem: number = obj[key];
    resZ += elem;
}

console.log(resZ);




