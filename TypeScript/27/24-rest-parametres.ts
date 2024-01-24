function funcRP(...rest: number[]) {
    console.log(rest);

}

funcRP(1, 2, 3);

function funcSum1(...nums: number[]): number {
    let res: number = 0
    for (const num of nums) {
        res += num;
    }

    return res;
}

console.log(funcSum1(2, 3, 5));
