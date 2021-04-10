// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
let numbers = [5, 3, 2, 4, 9, 8, 7, 2, 25, 10, 11, 78, 55, 98, 47, 25, 55, 24, 89, 32]
let number = numbers.sort((a, b) => {
    return a - b;
});
console.log(number);

//     b) відсортувати його від більшого до меншого.
let number1 = numbers.sort((a, b) => {
    return b - a;
});
console.log(number1);

//     c) Відфілтрувати числа які є кратними 3.
let numbersOne = numbers.filter((value) => {
    return value % 3 === 0;
});
console.log(numbersOne);

//     d) Відфілтрувати числа які є більшими за 10.
let numbers1 = numbers.filter((value => value > 10));
console.log(numbers1);

//     e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
numbers1.forEach((value) => {
    document.write(`${value}`);
    document.write('<br>');
});

//     f) За допомогою map збільшити кожен елемент в масиві в три рази.
let map = numbers.map(value => value * 3);
console.log(map);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
let sum = numbers.reduce((acc, currentValue) => acc + currentValue)
console.log(sum);

//  ======== 2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку
let strs = ['Yuriy', 'Ivan', 'Andriy', 'Vasyl', 'Rostyk', 'Viktor', 'Taras', 'Sergiy', 'Karina', 'Maria',
    'Natalia', 'Petya', 'Ostap', 'Danya', 'Volodymyr', 'Bogdan', 'Misha', 'Myron', 'Kolya', 'Sofia']
let strings = strs.sort();

console.log(strings);
//  b) Відсортувати в зворотньому порядку

let strings1 = strs.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    return -1;
});
console.log(strings1);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let stringsLeng = strs.filter((name => name.length > 4));
console.log(stringsLeng);

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
let map1 = strs.map((value) => {
    return 'Sam says ' + value;
});
console.log(map1);


//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let sort = users.sort((a, b) => {
    return a.age - b.age;
});
console.log(sort);

let sortReverse = users.sort((a, b) => b.age - a.age);
console.log(sortReverse);

// urers.sort((a,b)=>)
// let reduce = users.reduce((acc, currentValue)=>acc+currentValue.age, 0);
// console.log(reduce); // порахував загальний вік користувачів

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sort1 = users.sort((a, b) => a.name.length - b.name.length);
console.log(sort1);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let jsonClone = JSON.stringify(users);
let usersClone = JSON.parse(jsonClone);

let id=1;
let map2 = usersClone.map((value) => {
    value.id=id++;
    return value;
});
console.log(map2);
console.log(users);


// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let marriedUsers= [];
users.forEach( (value) => {
    if(value.isMarried===true){
        value.flat = 'Green House'
        marriedUsers.push(value);
    }
}); //зробив через forEach
console.log(marriedUsers)


// =====================  РОБОТА В АУДИТОРІЇ ======================
const cars = [
   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
   {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
   {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
   {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
   {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
   {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
   {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
   {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
//Відфільтрувати масив за наступними критеріями :
// - двигун більше 3х літрів
let filterVolume = cars.filter((engine)=>engine.volume> 3);
console.log(filterVolume);

// - двигун = 2л
let filterVolume1= cars.filter((value)=>value.volume===2);
console.log(filterVolume1);

// - виробник мерс
let filterBrand = cars.filter((value)=>value.producer==='mercedes');
console.log(filterBrand);

// - двигун більше 3х літрів + виробник мерседес
let filter = cars.filter((value) => value.volume>=3 && value.producer==='mercedes');
console.log(filter);
// - двигун більше 3х літрів + виробник субару
let filterSubaru = cars.filter((value)=>value.volume>2 && value.producer==='subaru');
console.log(filterSubaru); // don`t work print empty array

// - сили більше ніж 300
let filter1 = cars.filter(value => value.power>300 );
console.log(filter1);

// - сили більше ніж 300 + виробник субару
let filter2 = cars.filter(value => value.power>300 && value.producer==='subaru');
console.log(filter2);

// - мотор серіі ej
let filter3 = cars.filter(value => value.engine.startsWith('ej'));
console.log(filter3);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let filter4 = cars.filter(value => value.power>300 && value.producer==='subaru' && value.engine.startsWith('ej'));
console.log(filter4);

// - двигун меньше 3х літрів + виробник мерседес
let filter5 = cars.filter(value => value.volume<3 && value.producer==='mercedes');
console.log(filter5); // виводить всіх мерсів

// - двигун більше 2л + сили більше 250
let filter6 = cars.filter(value => value.volume>2 && value.power>250);
console.log(filter6); //dont work

// - сили більше 250  + виробник бмв
let filter7 = cars.filter(value => value.power>250 && value.producer==='bmw');
console.log(filter7);


//- взять слдующий массив
const usersWithAddress = [
   {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
   {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
   {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
   {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
   {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
   {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
   {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
   {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
   {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
   {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
   {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// let usersWithAddressJSON= JSON.stringify(usersWithAddress);
//
// -- Відсортувати їх по ID в зворотньому порядку
let sort3 = usersWithAddress.sort((a, b) =>b.id-a.id);
console.log(sort3); // перезатирає

// -- Відсортувати їх по ID
let sort2 = usersWithAddress.sort((a, b) => a.id-b.id);
console.log(sort2);


// -- Відсортувати по віку
let sort7 = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(sort7);

// -- Відсортувати по віку в зворотньому порядку
let sort4 = usersWithAddress.sort((a, b)=> b.age-a.age);
console.log(sort4); //перезатирає

// -- Відсорутвати по імені
let sort5 = usersWithAddress.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
});
console.log(sort5);

//-- Відсорутвати по назві вулиці
let sort6 = usersWithAddress.sort((a, b) =>{
    if (a.address.street<b.address.street){
        return -1;
    }
    return 1;
});
console.log(sort6); //перезатирає минулий який був відсортований

// -- Відсорутвати по номеру будинку
let sortNumberHouse=usersWithAddress.sort((a,b) => a.address.number-b.address.number);
console.log(sortNumberHouse);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let filterAge = usersWithAddress.filter(value => value.age<30);
console.log(filterAge);

// -- Залишити тільки одружених
let filterMarried = usersWithAddress.filter(value => value.isMarried===true);
console.log(filterMarried);

// -- Залишити тільки одружених, які молодні за 30
let filter8 = usersWithAddress.filter(value => value.isMarried===true && value.age<30);
console.log(filter8);

// -- Залишити лише тих, в кого парні номери будинків.
let pairHouse = usersWithAddress.filter((value) => {
    if (value.address.number%2===0)
    return value.address.number;
});
console.log(pairHouse);

// -- Порахувати загальний вік всіх людей. (reduce)
let sumAge = usersWithAddress.reduce((acc, currentValue) => acc+currentValue.age, 0);
console.log(sumAge);

//-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let filter9 = usersWithAddress.filter(value => value.isMarried=== true && value.age>30);
console.log(filter9);

// let reduce = filter9.reduce(currentValue => {
//     filter9.child = 'marta'
//     return filter9;
// });
// console.log(reduce); // не зміг зробити
