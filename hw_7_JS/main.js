//1) створити функцію яка приймає масив та виводить його
let array = [50, 60, 70, 80, 90, 100]

function printArray(arr) {
    console.log(arr);
}

printArray(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
let array1 = [];

function randomNumber(random) {
    for (let i = 0; i < 5; i++) {
        array1.push(Math.floor(Math.random() * 100));
        console.log(array1[i]);
    }
    printArray(random);
}

randomNumber(array1);

//3) створити функцію яка приймає три числа та виводить найменьше.
let arrayThreeNumber = [5, 2, 95];

function minNumb(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    console.log(min)
}

minNumb(arrayThreeNumber);

//4) створити функцію яка приймає три числа та виводить найбільше.
let arrayNumber = [300, 200, 600];

function maxNumb(maxNumbers) {
    let max = maxNumbers[0];
    for (let i = 1; i < maxNumbers.length; i++) {
        if (maxNumbers[i] > max) {
            max = maxNumbers[i]
        }
    }
    console.log(max);
}

maxNumb(arrayNumber)


// 5) створити функцію яка повертає найбільше число з масиву
let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 300));
}
console.log(randomArr);

function maxReturn(returnMaxNumber) {
    let max1 = returnMaxNumber[0];
    for (let i = 1; i < returnMaxNumber.length; i++) {
        if (returnMaxNumber[i] > max1) {
            max1 = returnMaxNumber[i];
        }
    }
    return max1;
}

let maxReturn1 = maxReturn(randomArr);
console.log(maxReturn1);


// 6) створити функцію яка повертає найменьше число з масиву
let randomArr2 = [];
for (let i = 0; i < 5; i++) {
    randomArr2.push(Math.floor(Math.random() * 100));
}
console.log(randomArr2)

function minReturn(returnMinNumber) {
    let min = returnMinNumber[0];
    for (let i = 1; i < returnMinNumber.length; i++) {
        if (returnMinNumber[i] < min) {
            min = returnMinNumber[i];
        }
    }
    return min;
}

let minReturn1 = minReturn(randomArr2);
console.log(minReturn1);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
let arr10 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function sumArray(sumArray10) {
    let sumArr = 0;
    for (let sumArray10Element of sumArray10) {
        sumArr += sumArray10Element
    }
    return sumArr;
}

let returnSumArr = sumArray(arr10);
console.log(returnSumArr);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrayNumbers = [100, 80, 985, 68, 5, 7, 8, 5, 105, 25];

function arrArithmeticMean(arithmeticmean) {
    let sum = 0;
    for (let arithmetics of arithmeticmean) {
        sum += arithmetics;
    }
    return sum;
}

let sumReturn = arrArithmeticMean(arrayNumbers);
console.log(sumReturn / arrayNumbers.length);

//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let obj = [{name: 'Dima', age: 13}, {model: 'Camry 3.5'}]

function arrObjects(objects) {
    let result = [];
    for (let objectsKey in objects) {
        result.push(Object.keys(objects[objectsKey]));
    }
    return result.flat();

}

let arrObjects1 = arrObjects(obj);
console.log(arrObjects1);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnValue(objects1) {
    let result = [];
    for (let object1 of objects1) {
        for (let object1Key in object1) {
            result.push(object1[object1Key])
        }
    }
    return result;
}

let value = returnValue(obj);
console.log(value);

//11) створити функцію  яка додає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function composeSomeIndex(array1, array2) {
    let newArrayIndex = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (i === j) {
                newArrayIndex.push(array1[i] + array2[j]);
            }
        }
    }
    return newArrayIndex;
}

let someIndex = composeSomeIndex([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(someIndex);


//// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function createDiv(addDiv) {
    let htmlDivElement = document.createElement('div');
    htmlDivElement.innerText = `${addDiv}`;
    htmlDivElement.style.backgroundColor = 'blue'
    htmlDivElement.style.color = 'yellow'
    document.body.appendChild(htmlDivElement);
}

createDiv(prompt('Enter the text you want to see on the page'));

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function createHtmlElemnet(addElement, addText) {
    let htmlElement = document.createElement(`${addElement}`);
    htmlElement.innerText = `${addText}`
    document.body.appendChild(htmlElement);
}

createHtmlElemnet('div', 'Hello user')


//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елементу в який потрібно додати список цих автомобілів.
////Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let arrayCars = [{brand: 'Audi', model: 'Q8'},
    {brand: 'BMW', model: 'M6'},
    {brand: 'Mercedes-Benz', model: 'G63'},
    {brand: 'Mazda', model: 'CX-5'},
    {brand: 'Toyota', model: 'Tundra'}];

let elementById = document.getElementById('carsList');

function getArrayCars(objectCars, id) {
    for (let i = 0; i < objectCars.length; i++) {
        let arrDiv = document.createElement('div');
        arrDiv.innerText = `${arrayCars[i].brand}
        ${arrayCars[i].model}`;
        id.appendChild(arrDiv);
    }
}

getArrayCars(arrayCars, elementById);






