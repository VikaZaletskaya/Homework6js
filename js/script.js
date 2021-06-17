//Задача 1
let str = 'aaa@bbb@ccc';
    console.log(str.replace(/@/g, '!'));

//Задача 2
let str2 = '2025-12-31';
let str2Arr = str2.split('-');
let STR = str2Arr[2] + '/' + str2Arr[1] + '/' + str2Arr[0];
console.log(STR);

//Задача 3
let str3 = 'Я учу Javascript!';

console.log(str3.substring (2,5));
console.log(str3.substring (6,17));

console.log(str3.substr (2,3));
console.log(str3.substr (6,11));

console.log(str3.slice (2,5));
console.log(str3.slice (6,17));

//Задача 4 

let Arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (i = 0; i < Arr.length; i++) {
    sum += Math.pow(Arr[i], 3);
}
console.log(Math.sqrt(sum));


//Задача 5

function func1 (a, b) {
    let c = a - b
    console.log(Math.abs(c));
}
func1 (3,5);
func1 (6,1);

//Задача 6

let date = new Date ();

function getZero (num) {
    if (num > 0 && num < 10) { 
    return '0' + num;
    } else {
        return num;
        }
}   
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

//Задача 7

let str4 = 'aa aba abba abbba abca abea';
console.log(str4.match(/ab+a/gi));

//Задача 8

let phone = '+375299917177';
let regexp = /[+]375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/gi;
console.log(regexp.test(phone));
