let str1: 'success' | 'error';
str1 = 'success';
str1 = 'error';
//str1 = 'smth';

//* Ex1 / 13

let str2: 'error' | 'warning' | 'success';
//str2 = 'abc';
str = 'success';

//

type message = 'success' | 'error';
let strX: message;
//strX = 'acb';
strX = 'error';

type msg = 'success' | 'error';
let str3: msg | 'warning';

//str3 = 'badaboom';
str3 = 'success';

//* Ex2 / 13

type info = 'error' | 'warning' | 'success';
let elem: info;

//elem  = 'str';
elem = 'error';



