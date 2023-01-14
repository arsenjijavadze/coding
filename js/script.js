/*code.mu
 *Javascript Book Prime
 *Theme Events
 *lesson 183-210
 */

// function func() {
//     console.log('!!!');
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

//184 task1

// function func1() {
//     console.log(1);
// }

// function func2() {
//     console.log(2);
// }

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// //185
// function func() {
//     console.log('!!!');
// }

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func);
// button2.addEventListener('click', func);

//185 task 1
// function func() {
//     console.log('message');
// }

// let text1 = document.querySelector('#elem1');
// let text2 = document.querySelector('#elem2');
// let text3 = document.querySelector('#elem3');
// let text4 = document.querySelector('#elem4');
// let text5 = document.querySelector('#elem5');

// text1.addEventListener('click', func);
// text2.addEventListener('click', func);
// text3.addEventListener('click', func);
// text4.addEventListener('click', func);
// text5.addEventListener('click', func);

// //186
// function func1() {
//     console.log('1');
// }

// function func2() {
//     console.log('2');
// }

// let button = document.querySelector('#button');

// button.addEventListener('click', func1);
// button.addEventListener('click', func2);

//186 task 1

// function func1() {
//     console.log('1');
// }

// function func2() {
//     console.log('2');
// }

// function func3() {
//     console.log('3');
// }

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     console.log('1');
// });

// button.addEventListener('click', function () {
//     console.log('2');
// })

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function () {
//     console.log('1');
// });

// button.addEventListener('dblclick', function () {
//     console.log('2');
// });

// button.addEventListener('dblclick', function () {
//     console.log('3');
// });

//187



// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     console.log(elem.innerHTML);
// })

// // 187 task 1
// let num1 = document.querySelector('#num1');
// let num2 = document.querySelector('#num2');
// let result = document.querySelector('#result');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     console.log(Number(num1.innerHTML));
//     result.innerHTML = Number(num1.innerHTML) + Number(num2.innerHTML);
// });

//187 task 2

// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');


// button1.addEventListener('click', function () {
//     console.log(text1.innerHTML);
// });

// button2.addEventListener('click', function () {
//     console.log(text2.innerHTML);
// })

//187 task 3

// let text = document.querySelector('#text');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', function () {
//     text.innerHTML = 'Hi!';

// });

// button2.addEventListener('click', function () {
//     text.innerHTML = 'Chao!';
// });

//187 task 4
// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let text3 = document.querySelector('#text3');

// text1.addEventListener('click', function () {
//     text1.innerHTML = 1;

// });
// text2.addEventListener('click', function () {
//     text2.innerHTML = 2;
// });
// text3.addEventListener('click', function () {
//     text3.innerHTML = 3;
// });

// 187 task 5
// let button = document.querySelector('#button');
// let value = document.querySelector('#value');

// button.addEventListener('click', function () {
//     let result = Number(value.innerHTML);
//     result = result * result;
//     value.innerHTML = result;
// });

// // 187 task 6
// let value = document.querySelector('#value');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     let result = Number(value.innerHTML);
//     result++;
//     value.innerHTML = result;

// })

//187 task 7

// let mark = document.querySelector('#exclamation');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     mark.innerHTML = '!';
// });

//task 8
// let mark = document.querySelector('#mark');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     mark.innerHTML = '!';
// });

//task9
// let text = document.querySelector('#text');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     text.innerHTML = '<b>Lorem, ipsum.</b>';
// });


// let button = document.querySelector('#button');
// let button2 = document.querySelector('#button2');
// let text = document.querySelector('#text');

// button.addEventListener('click', function () {
//     text.innerHTML = '<i>Hello!</i>';
// });

// button2.addEventListener('click', function () {
//     let newText = text.innerHTML;
//     text.innerHTML = '<b>' + newText + '</b>';
// });

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     console.log(elem.id);
//     console.log(elem.type);

//     elem.type = 'submit';
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     console.log(elem.type);
// });

//188 task 2

// let ancor = document.querySelector('#ancor');
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     elem.innerHTML = ancor.href;
//     console.log(ancor.href);
// });

//188 task 4

// let elem = document.querySelector('#elem');
// let ancor = document.querySelector('#ancor');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     elem.innerHTML = '(' + ancor.href + ')';
// });

//188 task 5


// let img = document.querySelector('#image');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text');

// button.addEventListener('click', function () {
//     text.innerHTML = img.src;
// });

//188 task 6
// let img = document.querySelector('#image');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     if (img.width != 300) {
//         img.width = 300;
//     } else {
//         img.width = 100;
//     }

// });

// let button = document.querySelector('#button');
// let image = document.querySelector('#image');

// button.addEventListener('click', function () {
//     image.width = image.width * 2;
// });

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let image = document.querySelector('#image');

// button1.addEventListener('click', function () {
//     image.src = '/img/big-pics/istockphoto-1201714677-612x612.jpg';
// });

// button2.addEventListener('click', function () {
//     image.src = '/img/big-pics/photo-1528716321680-815a8cdb8cbe.jpg';
// });

//189


// let elem = document.querySelector('#elem');

// console.log(elem.value);

// elem.value = 'new text';

//task 1

// let text = document.querySelector('#text');
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     text.innerHTML = elem.value;
// });

//189 task 2
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');

// button.addEventListener('click', function () {
//     text.innerHTML = elem.value;
// });

//task 4 and 5

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');

// // button.addEventListener('click', function () {
// //     elem2.value = Number(elem1.value) * Number(elem1.value);
// // });

// button.addEventListener('click', function () {
//     let value1 = elem1.value;
//     let value2 = elem2.value;

//     elem1.value = value2;
//     elem2.value = value1;
// });

//task 189 6

// let inputs = document.querySelectorAll('.numbers');
// console.log(inputs);
// let sum = 0;
// let num = 0;
// let result = document.querySelector('#result');

// let button = document.querySelector('#button');
// button.addEventListener('click', function () {

//     for (let i = 0; i < inputs.length; i++) {
//         sum += Number(inputs[i].value);
//     };

//     num = sum / inputs.length;
//     result.innerHTML = num;

// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function () {
//     console.log(elem.value);
// })

//task 1


// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function () {
//     elem.value = 1;
// });

// elem.addEventListener('blur', function () {
//     elem.value = 2;
// });

// let elem = document.querySelector('#elem');

// // elem.addEventListener('blur', function () {
// //     elem.value = Number(elem.value) * Number(elem.value);
// // });

// elem.addEventListener('focus', function () {
//     elem.value = '';
// })

//191

// let elem = document.querySelector('#elem');
// console.log(elem.className);

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     console.log(elem.className);
//     elem.className = 'hardWork';
//     console.log(elem.className);
// });

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     console.log(elem.classList);
//     console.log(elem.className);

// });

// let elem = document.querySelector('#elem');
// console.log(elem.value);
// document.querySelector('#elem').value = 'hard work and keep calm';
// console.log(document.querySelector('#elem').value);


// let image = document.querySelector('#image');
// console.log(image.src);
// console.log(document.querySelector('#image').src);

// 194

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//     this.value = 'hard work makes dreams come true';
// })

//194 task 1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// elem.addEventListener('focus', function () {
//     this.value = 1;
// });

// elem.addEventListener('blur', function () {
//     this.value = 2;
// });

// button.addEventListener('click', function () {
//     this.value = Number(this.value) + 100;
// })

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);

// function func() {
//     console.log(this.value);
// };

// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let text3 = document.querySelector('#text3');
// let text4 = document.querySelector('#text4');
// let text5 = document.querySelector('#text5');

// let button = document.querySelector('#button');

// text1.addEventListener('click', func);
// text2.addEventListener('click', func);
// text3.addEventListener('click', func);
// text4.addEventListener('click', func);
// text5.addEventListener('click', func);

// button.addEventListener('click', func1);

// function func() {
//     this.innerHTML = this.innerHTML + '!';
// };

// function func1() {
//     text1.innerHTML = getWord(text1.innerHTML);
//     text2.innerHTML = getWord(text2.innerHTML);
//     text3.innerHTML = getWord(text3.innerHTML);
//     text4.innerHTML = getWord(text4.innerHTML);
//     text5.innerHTML = getWord(text5.innerHTML);

// };

// function getWord(elem) {
//     let word = '';
//     for (let i = 0; i < elem.length; i++) {
//         if (elem[i] != '!') {
//             word += elem[i];
//         }
//     }
//     return word;
// }

// console.log(getWord('aa!'));

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);

// function func() {
//     this.value = Number(this.value) * Number(this.value);
// };

// let elems = document.querySelectorAll('.www');

// for (let elem of elems) {
//     console.log(elem.innerHTML);
// };

// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     let elems = document.querySelectorAll('.www');
//     for (let elem of elems) {
//         elem.innerHTML = 'newText';
//     }
// });

// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//     let elems = document.querySelectorAll('.www');
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].innerHTML = elems[i].innerHTML + (i + 1);
//     };
// });

// let button = document.querySelector('#button');
// let result = document.querySelector('#result');
// button.addEventListener('click', function () {
//     let sum = 0;
//     let nums = document.querySelectorAll('.num');
//     for (num of nums) {
//         sum += Number(num.value);
//     };

//     result.innerHTML = sum;
// });

//195

// function func() {
//     console.log(this.innerHTML);
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }

//195 task 1
// function func() {
//     this.value = Number(this.value) + 1;
// }

// let elems = document.querySelectorAll('input');

// for (let elem of elems) {
//     elem.addEventListener('blur', func);
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }

// function func() {
//     this.innerHTML = Number(this.innerHTML) * Number(this.innerHTML);
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         console.log(this.innerHTML);
//     });
// }

// task 3

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
//     div.addEventListener('click', function () {
//         this.innerHTML++;
//     });
// };

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
//     console.log('alert');
//     this.removeEventListener('click', func);
// }

// let ancor = document.querySelector('a');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', func);

// function func() {
//     elem.innerHTML = ancor.href;
//     console.log(ancor.href);
//     this.removeEventListener('click', func);


// };

// task 2 196

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
//     this.value = Number(this.value) + 1;
//     if (this.value == 10) {
//         this.removeEventListener('click', func);
//     }
// };

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }

// function func() {
//     console.log(this.innerHTML);
//     this.removeEventListener('click', func);
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }

// function func() {
//     this.innerHTML = this.innerHTML + ' !';
//     this.removeEventListener('click', func);
// };

//198

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', function func() {
//         console.log(this.innerHTML);
//         this.removeEventListener('click', func);
//     });
// }

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');

// console.log(value);

// let elem = document.querySelector('#elem');
// let text = elem.getAttribute('value');

// console.log(text);

// let elem = document.querySelector('#elem');
// let classOfElem = elem.getAttribute('class');

// console.log(classOfElem);

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'Never Give Up');

// let newValue = elem.getAttribute('value');
// console.log(newValue);

//199
//task 3

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');
// elem.setAttribute('class', 'valid');

// let classOfElem = elem.getAttribute('class');
// console.log(classOfElem);

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// //task 5
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// function getReset() {
//     button.addEventListener('click', function func() {
//         elem.removeAttribute('value');
//         button.setAttribute('value', 'set');
//         button.removeEventListener('click', func);
//         console.log('func');
//         getSet();

//     });
// }

// function getSet() {

//     button.addEventListener('click', function func2() {
//         let newValue = prompt('Enter new value', '');
//         elem.setAttribute('value', newValue);
//         button.removeEventListener('click', func2);
//         console.log('func2');
//         button.setAttribute('value', 'reset');
//         getReset();
//     });
// }


// getReset();

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

//task6

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// let elem = document.querySelector('#elem');
// elem.value = 'new';

// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let result = document.querySelector('p');

// button.addEventListener('click', function () {
//     if (elem.value == elem.getAttribute('value')) {
//         result.innerHTML = 'value not changed';
//     } else {
//         result.innerHTML = 'value have been chanched';
//     }
// });

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'new');

// let value = elem.value;
// console.log(value);

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function () {
//     elem.value = elem.getAttribute('value');
// })

// 201

//classList theory

// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// document.write(elem.classList + '<br>');
// console.log(length);

// let classNames = elem.classList;
// for (let className of classNames) {
//     document.write(className + '<br>');
// }

// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

// let elem = document.querySelector('#elem');
// let classNames = elem.classList;

// let elem = document.querySelector('#elem');
// let classNum = elem.classList.length;
// console.log(classNum);

// for (let className of elem.classList) {
//     console.log(className);
// }

// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('zaz');
// console.log(contains);

// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');
// let classNames = elem.classList;
// for (let className of classNames) {
//     console.log(className);
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         this.classList.add('colored');
//     });
// }

// let text = document.querySelector('p');
// let buttonBold = document.querySelector('#bold');
// let buttonRed = document.querySelector('#red');
// let buttonLine = document.querySelector('#line');

// buttonBold.addEventListener('click', () => {
//     text.classList.toggle('textWeight');
// });
// buttonRed.addEventListener('click', () => {
//     text.classList.toggle('colored');
// });
// buttonLine.addEventListener('click', () => {
//     text.classList.toggle('textDecoration');
// })

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', () => {
//     elem.classList.toggle('active');
// });

//firstElementChild
// let parent = document.querySelector('#parent');
// let result = parent.firstElementChild;

// console.log(result);

//lastElementChild
// let parent = document.querySelector('#parent');
// let text = parent.lastElementChild.innerHTML;

// console.log(text);
//
// let parent = document.querySelector('#parent');
// let firstChild = parent.firstElementChild;
// let lastChild = parent.lastElementChild;
// lastChild.classList.add('colored');
// firstChild.classList.add('colored');

// console.log(firstChild);

// let elem = parent;
// let elemChildrens = elem.children;
// for (child of elemChildrens) {
//     child.innerHTML += '!';
// // }
// let elem = document.querySelector('#elem');
// let id = elem.parentElement.id;

// console.log(id);

// let elem = document.querySelector('#elem');
// let parentElem = elem.parentElement;
// let parentElemParent = parentElem.parentElement;

// parentElem.classList.add('redBorder');
// parentElemParent.classList.add('redBorder');

// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id);
// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id);

///////////////////////
//previousElementSibling

// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling;

// console.log(text);

// let elem = document.querySelector('#elem');
// let upElem = elem.previousElementSibling.innerHTML;

// upElem += '!';
// elem.previousElementSibling.innerHTML = upElem;
// console.log(upElem);

// elem.nextElementSibling.innerHTML += '!';

// let elem = document.querySelector('#elem');
// let nextElement = elem.nextElementSibling;
// nextElement.nextElementSibling.innerHTML += '!';


// let elem = document.querySelector('#elem');
// let previousElementText = elem.previousElementSibling.innerHTML;
// let nextElementText = elem.nextElementSibling.innerHTML;

// elem.nextElementSibling.innerHTML = previousElementText;
// elem.previousElementSibling.innerHTML = nextElementText;

//////////////LESSON 205
// let elem = document.getElementById('elem');
// let text = 'lorem';
// elem.innerHTML = text;

// let elems = document.getElementsByClassName('www');

// for (let i = 0; i < elems.length; i++) {
//     elems[i].classList.add('colored');
// }

// let parent = document.querySelector('#parent');
// let elems = parent.querySelectorAll('.child');


// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelector('.ggg');

// for (let elem of elems1) {
//     console.log(elem.innerHTML);
// }

// let elem = document.querySelector('#elem');
// elem.dataset.num = 123;
// console.log(elem.dataset.num);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//     console.log(elem.dataset.text);
//     elem.innerHTML += elem.dataset.text;
// });

// let elems = document.querySelectorAll('div');
// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         elem.innerHTML += elem.dataset.num;
//     });
// }

// let button = document.querySelector('#button');
// let text = document.querySelector('#result');
// let numOfClicks = 0;
// button.addEventListener('click', function () {
//     numOfClicks += 1;
//     button.dataset.num = numOfClicks;

// });

// button.addEventListener('dblclick', function () {
//     text.innerHTML = button.dataset.num;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//     if (elem.value.length != elem.dataset.length) {
//         alert('length not correct!');
//     }
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {

//     let min = Number(elem.dataset.min);
//     let max = Number(elem.dataset.max);

//     if (elem.value.length < min || elem.value.length > max) {
//         console.log('done');
//     }

// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//     let price = Number(elem.dataset.productPrice);
//     let amount = Number(elem.dataset.productAmount);
//     let result = price * amount;
//     elem.innerHTML += 'price ' + result;
// })

// let elem = document.querySelector('#elem');

// console.log(elem.getAttribute('data-num'));
// console.log(elem.getAttribute('data-my-num'));

// let elems = document.querySelectorAll('p');
// let elem = document.querySelector('#elem');

// for (let i = 0; i < elems.length; i++) {
//     elems[i].setAttribute('data-num', i + 1);
// }

// console.log(elem.getAttribute('data-num'));



//270 works with the nodes in JS
// let elem = document.querySelector('#elem');

// //
// let years = document.querySelectorAll('li');
// let result = 0;

// for (let year of years) {
//     let sum = 0;
//     //let result = 0;
//     for (let num of year.innerHTML) {
//         sum += Number(num);
//     }

//     if (sum === 6) {
//         console.log(year.innerHTML);
//         result += sum;
//     }



// }

// console.log('Result: ' + result);
// //
/*
function digitize(n) {
    //code here
    let arr = [];
    let result;
    if (n === 0) {
        result = arr.push[n];
        return result;
    } else {
        for (let i = 0; i < n.length; i++) {
            return arr.push(n[i]);
            //let result = arr.reverse();
            //return result;
        }
    }

}
*/
// function digitize(n) {
//     let arr = [];
//     if (n === 0) {
//         arr.push(n);
//         return arr;
//     } else {
//         n = String(n);
//         for (let i = 0; i < n.length; i++) {
//             arr.push(Number(n[i]));
//         }
//         return arr.reverse();
//     }

// }

// console.log(digitize(12));

// function findSmallestInt(args) {

// }

// findSmallestInt([3, 2, 1]);

// function fakeBin(x) {
//     // x = x.split('');
//     // for (let i = 0; i < x.length; i++) {
//     //     if (Number(x[i]) < 5) {
//     //         x[i] = '0';
//     //     } else {
//     //         x[i] = '1';
//     //     }
//     // }

//     // return x.join('');

//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// console.log(fakeBin('45385593107843568'));

// function isIsogram(str) {
//     str = str.toLowerCase();
//     if (str === '') {
//         return true;
//     }
//     for (let i = 0; i < str.length; i++) {
//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {

//                 count++;
//             }
//             if (count >= 2) {
//                 return false;
//             }
//         }

//     }
//     return true;
// }

// console.log(isIsogram('aba'));
// console.log(isIsogram(''));
// console.log(isIsogram('moOse'));
// console.log(isIsogram('isogram'));

// //console.log('o' === 'O');
// console.log(isIsogram('moOse'));
//1
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {

//     elem.textContent += '!';

// }
//2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         this.textContent++;
//     });
// }
// //3
// let button = document.querySelector('button');
// let elem = document.querySelector('p');

// button.addEventListener('click', function () {
//     elem.innerHTML = `<b>${elem.innerHTML}</b>`;
// });
//4
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.addEventListener('click', () => {
//         console.log(elem.textContent);
//         elem.textContent += '!';
//     });
// }
//6
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');

// button.addEventListener('click', function () {
//     for (let elem of elems) {
//         elem.innerHTML = `<b>${elem.innerHTML}</b>`;
//     }
// });
//7
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// let sum = 0;



// button.addEventListener('click', function () {
//     for (let elem of elems) {
//         sum += Number(elem.textContent);
//     }
//     console.log(sum);
// })
//8
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');
// let sum = 0;



// button.addEventListener('click', function () {
//     for (let elem of elems) {
//         sum += Number(elem.value);

//     }
//     console.log(sum);
// });
//9
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function () {

//     inp3.value = +inp1.value + +inp2.value;
// });
//10
// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function () {
//     res.innerHTML = +inp1.value + +inp2.value;
// });
//11
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click', function () {

//     for (let input of inputs) {
//         console.log(input.getAttribute('data-text'));
//         if (input.value === input.getAttribute('data-text')) {
//             input.classList.add('right')
//         } else {
//             input.classList.add('wrong')
//         }
//     }
// });
//12
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
//     'text1',
//     'text2',
//     'text3',
// ];


// button.addEventListener('click', function () {
//     for (let i = 0; i < inputs.length; i++) {
//         console.log(inputs[i].value);
//         if (inputs[i].value === texts[i]) {

//             inputs[i].classList.add('right');
//         } else {
//             inputs[i].classList.add('wrong');
//         }
//     }
// });
//13
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;


// btn.addEventListener('click', function () {

//     for (let input of inputs) {
//         console.log(input.value);
//         sum += +input.value;
//     }

//     console.log(sum);

// });
//14
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');



// btn.addEventListener('click', function () {
//     let sum = +inp1.value + +inp2.value;
//     inp3.value = sum;
// });
//15
// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function () {
//     let digits = inp.value.split('');
//     let sum = 0;

//     for (let digit of digits) {
//         sum += +digit;
//     }

//     console.log(sum);
// });

// task 3
// let elem = document.querySelector('#elem');
// let result = document.querySelector('#result');
// let sum = 0;

// elem.addEventListener('blur', function () {
//     console.log(elem.value.length);

//     for (let i = 0; i <= elem.value.length - 1; i++) {
//         console.log(+elem.value[i]);
//         sum += +elem.value[i];

//     }

//     result.innerHTML += sum;
// })

//task4

// let elem = document.querySelector('#elem');
// let result = document.querySelector('#result');
// let num = 0;
// elem.addEventListener('blur', function () {

//     console.log(elem.value.split(','));
//     for (let item of elem.value.split(',')) {
//         num += +item;
//     }
//     console.log(num / elem.value.split(',').length);
//     result.innerHTML += num / elem.value.split(',').length;
// })

// tast 5

// let elem = document.querySelector('#elem');
// let personName = document.querySelector('#name');
// let surname = document.querySelector('#surname');
// let fName = document.querySelector('#fName');

// elem.addEventListener('blur', function () {
//     console.log(elem.value.split(' ')[0]);
//     personName.value = elem.value.split(' ')[0];
//     surname.value = elem.value.split(' ')[1];
//     fName.value = elem.value.split(' ')[2];
//     elem.value = '';
// })

//tast 6
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//     let arr = elem.value.split(' ');
//     arr[0] = getUpperCase(arr[0]);
//     arr[1] = getUpperCase(arr[1]);
//     arr[2] = getUpperCase(arr[2]);
//     elem.value = arr.join(' ');
//     console.log(arr.join(' '));
// })

// function getUpperCase(str) {
//     let elem = str.split('');
//     elem[0] = elem[0].toUpperCase();
//     return elem.join('');
// }

// console.log(getUpperCase('name'));

//task 7
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//     console.log(elem.value.split('.').reverse().join('-'));
// })
//task 8

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     console.log();
//     if (elem.value === elem.value.split('').reverse().join('')) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// })
// task10
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function () {
//     for (let item of elem.value) {
//         if (+item === 3) {
//             console.log('Yes');
//             return;
//         }

//     }
//     console.log('No');
//     return;

// })

// let elems = document.querySelectorAll('a');


// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         console.log(this.href);
//         this.innerHTML += `(${this.href})`;
//     })
// }

// let elems = document.querySelectorAll('p');
// console.log(elems);
// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         this.innerHTML = this.innerHTML ** 2;
//     })
// }
// task 15
// let months = {
//     1: 'January',
//     2: 'February',
//     3: 'March',
//     4: 'April',
//     5: 'May',
//     6: 'June',
//     7: 'July',
//     8: 'August',
//     9: 'September',
//     10: 'Octomber',
//     11: 'November',
//     12: 'December',
// };

// let elem = document.querySelector('#elem');
// let result = document.querySelector('p');
// elem.addEventListener('blur', function () {
//     //let month = elem.split('')
//     console.log(elem.value.split('.')[1]);
//     let month = elem.value.split('.')[1];
//     console.log(months[`${month}`]);

//     let xDay = new Date(
//         `${months[`${month}`]}
//         ${elem.value.split('.')[0]},
//         ${elem.value.split('.')[2]}
//         23:15:30`);
//     console.log(xDay.getDay());

//     const options = { weekday: 'long' };
//     result.innerHTML += new Intl.DateTimeFormat('en-US', options).format(xDay);
// })

// let elem = document.querySelector('#elem');
// let plus = document.querySelector('#plus');
// let minus = document.querySelector('#minus');

// let buttons = document.getElementsByClassName('button');
// for (let button of buttons) {


//     button.addEventListener('click', function () {


//         if (button.value === '+') {
//             +elem.value++;
//         }
//         if (button.value === '-') {

//             if (+elem.value > 0) {
//                 +elem.value--;
//             }

//         }
//     })
// }

// let result = document.querySelector('#result');
// let texts = document.querySelectorAll('p');

// for (let text of texts) {
//     text.addEventListener('click', function () {
//         console.log(+result.value++);
//     })
// }
// let texts = document.querySelectorAll('div');
// for (let text of texts) {
//     text.innerHTML = text.innerHTML.slice(0, 10) + '...';
// }

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     let result = Math.random().toString(36).substring(2, 10);
//     elem.value = result;
// })
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));

//         [array[i], array[j]] = [array[j], array[i]];
//     }

// }


// button.addEventListener('click', function () {
//     let arr = elem.value.split('');
//     shuffle(arr);
//     elem.value = arr.join('');

// })
// task 22
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let result = document.querySelector('p');

// button.addEventListener('click', function () {
//     result.innerHTML = Math.round((elem.value - 32) * 5 / 9);

// })
//task 23
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let result = document.querySelector('p');

// button.addEventListener('click', function () {
//     let n = +elem.value;
//     let factorial = 1;
//     for (let i = n; i > 0; i--) {
//         factorial *= i;
//         console.log(factorial);
//     }
//     result.innerHTML = factorial;
// })
//*

// let button = document.querySelector('#button');
// let a = document.querySelector('#a');
// let b = document.querySelector('#b');
// let c = document.querySelector('#c');
// let result = document.querySelector('p');

// button.addEventListener('click', function () {
//     quadraticEquation(+a.value, +b.value, +c.value);
// })

// let quadraticEquation = (a, b, c) => {
//     if (a == 0)
//         return false;
//     let res = {};
//     let D = b * b - 4 * a * c;
//     console.log('D = ' + D);
//     if (D < 0)
//         return false;
//     res['discriminant'] = D;
//     if (D == 0)
//         res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
//     else if (D > 0) {
//         let tmp = [];
//         tmp.push((-b + Math.sqrt(D)) / (2 * a));
//         tmp.push((-b - Math.sqrt(D)) / (2 * a));
//         res["quadratic roots"] = tmp;
//     }
//     return res;
// }
//*
//console.log(quadraticEquation(1, -8, 12));
//*

function getDivisorsCnt(n) {
    let divisors = 0;
    mod = n;
    while (mod > 0) {
        if (n % mod === 0) {
            divisors++;
        }
        mod--;
    }
    return divisors;
}

console.log(getDivisorsCnt(10));