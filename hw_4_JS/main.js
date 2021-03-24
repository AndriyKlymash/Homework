// task1
//- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let a = 'hello owu com ua ';
console.log(a);
let b = '1 10 -999 123 3.14 2.7 16';
console.log(b);
let bool = 'true false';
console.log(bool);
let c = 'Hello';
alert(c);
document.write(a);

// task2
// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
a = 'Hi';
console.log(a);
b = 'What is your name?';
alert(b);
let name = 'My name is Andriy';
document.write(name);

// task3
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const str1 = 'Klymash';
console.log(str1);
const str2 = 'Andriy ';
alert(str2);
const str3 = 'Romanovych ';
document.write(str3)

const number1 = '22';
const number2 = '03';
const number3 = '2021 ';
console.log(number1 + ' ' + number2 + ' ' + number3);
alert(number3);
document.write(number1 + ' ' + number2 + ' ' + number3);
document.write(`${number3} ${number2} ${number1}`); //template string

// task4
// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
let Name = prompt('Enter your name');
console.log(Name);
alert(`Hello ${Name}`);
let Surname = prompt('Enter your surname');
console.log(Surname);
alert(Surname);
let Patronym = prompt('Enter your patronym');
console.log(Patronym);
alert(Patronym);

// task5
// Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
let person = (` ${Name} ${Surname} ${Patronym}`);
console.log(person);

//task6
// Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let Name1 = prompt('Enter your name1');
console.log(Name1);
let Surname1 = prompt('Enter your surname1');
console.log(Surname1);
let Patronym1 = prompt('Enter your patronym1');
console.log(Patronym1);

let Name2 = prompt('Enter your name2');
console.log(Name2);
let Surname2 = prompt('Enter your surname2');
console.log(Surname2);
let Patronym2 = prompt('Enter your patronym2');
console.log(Patronym2);

let person1 = (` ${Name1} ${Surname1} ${Patronym1} ${Name2} ${Surname2} ${Patronym2}`);
document.write(person1);

//task 7
// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let Numb = +prompt('Enter number1');
console.log(Numb);
let Numb2 = +prompt('Enter number2');
console.log(Numb2);
let Numb3 = +prompt('Enter number3');
console.log(Numb3);

// task8
// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let fourNumber1 = prompt('Enter the first number');
fourNumber1 = parseInt(fourNumber1);
console.log(fourNumber1);

let fourNumber2 = prompt('Enter the second number');
fourNumber2 = parseInt(fourNumber2);
console.log(fourNumber2);

let fourNumber3 = prompt('Enter the third number');
fourNumber3 = parseInt(fourNumber3);
console.log(fourNumber3);

let fourNumber4 = prompt('Enter the fourth number');
fourNumber4 = parseInt(fourNumber4);
console.log(fourNumber4);
let result = (` ${fourNumber1 + fourNumber2 + fourNumber3 + fourNumber4}`);
result = parseInt(result);
console.log(result);

// task9
// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let threeNumber1 = prompt("Enter the first float number");
threeNumber1 = parseFloat(threeNumber1);
console.log(threeNumber1);

let threeNumber2 = prompt('Enter the second float number');
threeNumber2 = parseFloat(threeNumber2);
console.log(threeNumber2);

let threeNumber3 = prompt('Enter the third float number');
threeNumber3 = parseFloat(threeNumber3);
console.log(threeNumber3);

let resultFloat = (` ${threeNumber1 + threeNumber2 + threeNumber3}`);
resultFloat = parseFloat(resultFloat);
console.log(resultFloat);

// task10
//при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let firstNumberFloat = (prompt('Enter float number1'));
firstNumberFloat = parseFloat(firstNumberFloat);
console.log(Math.round(firstNumberFloat));

let secondNumberFloat = (prompt('Enter float number2'));
secondNumberFloat = parseFloat(secondNumberFloat);
console.log(Math.round(secondNumberFloat));

let thirdNumberFloat = (prompt('Enter float number3'));
thirdNumberFloat = parseFloat(thirdNumberFloat);
console.log(Math.round(thirdNumberFloat));

let resultFloat1 = (`${firstNumberFloat + secondNumberFloat + thirdNumberFloat}`);
resultFloat1 = parseFloat(resultFloat1);
console.log(resultFloat1);


//task11
// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let intNumber1 = prompt('Enter first int number');
intNumber1 = parseInt(intNumber1);
let intNumber2 = prompt('Enter second int number');
intNumber2 = parseInt(intNumber2);
console.log(Math.pow(intNumber1, intNumber2));

//task12
//При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let A = 100, B = '100', C = true, D = undefined;
console.log(typeof A);
console.log(typeof B);
console.log(typeof C);
console.log(typeof D);


// task13
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
console.log(5 < 6); //true
console.log(5 > 6); //false
console.log(5 >= 6); //false
console.log(5 === 6); //false
console.log(10 === 10); //true
console.log(10 >= 10); //true
console.log(10 < 10); //false
console.log(10 > 10);//false
console.log(10 != 10);//false
console.log(123 === '123') //false
console.log(123 == '123') //true


// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 ); //true
console.log(99 > 100 && 45 > 12 ); //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 ); //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
console.log(!!'-1'); //true
console.log(!!-1); //true
console.log(!!'0'); //true
console.log(!!'null'); //true
console.log(!!'undefined'); //true
console.log(!!(3/'owu')); //true
console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false
