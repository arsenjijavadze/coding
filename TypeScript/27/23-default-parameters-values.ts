function funcDPV(first: string, last: string = 'snow') {
    return first + ' ' + last;
}
//* Ex 1/ 23

function funcPow(base: number, exp: number = 2): number {
    const res: number = Math.pow(base, exp);
    return res;
}

console.log(funcPow(7));
console.log(funcPow(7, 3));

