// function make(num: number, func: (num: number) => number): number {
//     return func(num);
// }

// make(3, function(num: number): number{
//     return num ** 2;
// });

// make(3, function(num: number): number {
//     return num ** 3;
// })

type FuncT = (num: number) => number;

function make(arr: number[], func: FuncT): number {
    let sum: number = 0;

    for (let elem of arr) {
        sum += func(elem);
        console.log(`num-${sum}`);
    }
    //console.log(sum);

    return sum;
}

let resT: number = make([1, 2, 3], function (num: number): number {
    return num ** 2;
});

console.log(resT);