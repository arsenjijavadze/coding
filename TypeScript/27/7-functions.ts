function func(a: number, b: number) {
    return a + b;
}

function func1(a: number, b: number): number {
    return a + b;
}

//* Ex1/7
function sum(x: number, y: number): number {
    return x + y;
}

sum(2, 5);

//* Ex2/7
function sum1(arr: number[]) {
    let res: number = 0;

    for (let num of arr) {
        res += num;
    }

    return res;
}

console.log(sum1([1, 2, 3]));

//* Ex3/7
function funcX(elem: HTMLElement, text: string): void {
    elem.textContent = text;
}
