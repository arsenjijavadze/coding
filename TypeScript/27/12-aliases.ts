type str = string;

let str: str = 'abc';

//

type stumber = string | number;

let newTest: stumber;
newTest = 123;

//

//* Ex1 / 12
type boolenul = boolean | null;
let smth: boolenul;
//smth = 123; //!
smth = false;
smth = null;
//smth = 'abc'; //!

//* Ex2 / 12
type boofined = boolenul | undefined;
let smth1: boofined;

//smth1 = 123;
smth1 = false;
smth1 = null;
//smth1 = 'abc';
smth1 = undefined;






