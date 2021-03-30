//task1
//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let arrNumb = [10, 20, 30, 40, 50];
console.log(arrNumb);
let arrStr = ['Andriy', 'Vasyl', 'Sergiy', 'Volodumur', 'Alexander'];
console.log(arrStr);
let arr = [10, 20, 30, 40, 50, 'Andriy', 'Vasyl', 'Sergiy', 'Volodumur', 'Alexander', true, true, true, false, false];
console.log(arr);

//task2
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arrayEmpty = [];
arrayEmpty[0] = 5;
arrayEmpty[1] = 10;
arrayEmpty[2] = 15;
arrayEmpty[3] = 20;
arrayEmpty[4] = 'Andriy';
console.log(arrayEmpty);

//task3
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Box</div>');
}

//task4
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Box ${i}</div>`);
}

//task5
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let a = 0;
while (a < 20) {
    console.log('<h1>Hello</h1>');
    a++;
}

//task6
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while (b < 20) {
    console.log(`<h1>How are you? ${b}</h1>`);
    b++;
}
//task7
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < arrayNumber.length; i++) {
    console.log(arrayNumber[i]);
}

//task8
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrays = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let array of arrays) {
    console.log(array);
}

//task9
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrays1 = [5, 25, 50, 'Andriy', 'user'];
for (let array of arrays1) {
    console.log(array);
}

//task10
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrays2 = [5, 8, 10, 12, 18, 'name', 'age', true, false, true];
for (let i = 0; i < arrays2.length; i++) {
    if (typeof arrays2[i] === 'boolean') {
        console.log(arrays2[i]);
    } else {
    }
}

//task11
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < arrays2.length; i++) {
    if (typeof arrays2[i] === 'number') {
        console.log(arrays2[i]);
    } else {
    }
}

//task12
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < arrays2.length; i++) {
    if (typeof arrays2[i] === 'string') {
        console.log(arrays2[i]);
    } else {
    }
}

//task13
//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrEmpty = [];
arrEmpty[0] = 10;
arrEmpty[1] = 11;
arrEmpty[2] = 12;
arrEmpty[3] = 13;
arrEmpty[4] = 14;
for (let i = 0; i < arrEmpty.length; i++) {
    console.log(arrEmpty[i]);
}

//task14
//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('Крок :', i);
    document.write(`Крок:${i} `);
}
//task15
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log('Step :', j);
    document.write(`Step:${j} `);
}

//task16
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let a = 0; a < 100; a += 2) {
    console.log('Крок ітерації 2: ', a);
    document.write(`<br>Крок ітерації 2: ${a} `);
}

//task17
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let b = 0; b < 100; b++) {
    if (b % 2 === 0) {
        console.log(b);
        document.write(`${b} <br>`);
    }
}

//task18
//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 3 === 0) {
        console.log('step k:', k);
        document.write(`Step k:${k}<br>`)
    }
}

//task19
//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)



