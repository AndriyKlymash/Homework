//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
const content = document.getElementById('content');
console.log(content.textContent);

//     b) отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
console.log(rules.textContent);

//     c) замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Клуб бойових мистецтв'

//     d) замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Правила клубу'

//     e) змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

//     f) змініть кожному елементу колір тексту на синій
content.style.color = 'blue';
rules.style.color = 'blue';

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let contentClass = document.getElementsByClassName('fc bp')
console.log(contentClass);
//     h) отримати всі елементи з класом fc_rules
let rulesFC = document.getElementsByClassName('fc_rules');
console.log(rulesFC);
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < rulesFC.length; i++) {
    rulesFC[i].style.color = 'red';
}

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

for (let i = 0; i < users.length; i++) {
    let Elements = document.createElement('div');
    Elements.style.backgroundColor = 'cornflowerblue'
    Elements.innerText = `${users[i].name}`;
    document.body.appendChild(Elements);
}
console.log(users);

//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    let Elements1 = document.createElement('div');
    Elements1.innerText = `${users[i].name} : ${users[i].age}, ${users[i].status}`
    document.body.appendChild(Elements1);
}

for (let i=0;i <users.length;i++){
    let Elements2 = document.createElement('div');
    Elements2.innerText = `
    ${users[i].address.city}
    ${users[i].address.country}
    ${users[i].address.street}
    ${users[i].address.houseNumber}
    `
    document.body.appendChild(Elements2);
}