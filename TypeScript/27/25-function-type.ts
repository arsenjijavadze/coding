let func: (x: number, y: number) => number;
func = function (a: number, b: number): number {
    return a + b;
}

//

type Func = (x: number, y: number) => number;

let funcNN: Func = function (a: number, b: number): number {
    return a + b;
}

let func2: Func = function (a: number, b: number): number {
    return a * b;
}


let funcTest: (x: string) => void;

funcTest = function (text: string): void {
    console.log(text);

};

funcTest('qwerty');