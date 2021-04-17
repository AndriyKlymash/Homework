//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
let text = document.getElementById('text');
let btn = document.getElementById('clickButton');
btn.onclick = () => {
    text.hidden ? text.hidden = false : text.hidden = true;
}

// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
let button = document.getElementById('hiddenBtn');
button.onclick = () => {
    button.style.display = 'none';
}

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let myInput = document.getElementById('myInput');
let myButton = document.getElementById('btn');
myButton.onclick = (ev) => {
    let value = myInput.value;
    console.log(value);
    if (value < 18) {
        alert('Вам менше 18 років')
    } else {
        alert('Вітаємо ви пройшли перевірку, вам є 18 років')
    }
}

// - Створіть меню, яке розгортається/згортається при клику
let btnMenu = document.getElementById('buttonMenu');
let but = document.getElementById('button');
but.onclick = () => {
    if (but) {
        btnMenu.style.display = 'none';
        but = false;
    } else {
        btnMenu.style.display = 'block';
        but = true;
    }
}

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//      Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
let comments = [{title: 'Company', body: 'BMW', id: 0},
    {title: 'Company', body: 'Audi', id: 1},
    {title: 'Company', body: 'Mercedes', id: 2},
    {title: 'Company', body: 'Volkswagen', id: 3}]
let root = document.getElementById('root');
comments.forEach(value => {
    let divElement = document.createElement('div');
    let h1Element = document.createElement('h1');
    let pElement = document.createElement('p');
    let buttonElement = document.createElement('button');


    h1Element.innerText = value.title;
    pElement.innerText = value.body;
    buttonElement.innerText = 'Hide comment'
    buttonElement.onclick = () => {
        pElement.hidden = !pElement.hidden
    }

    divElement.appendChild(h1Element);
    divElement.appendChild(pElement);
    divElement.appendChild(buttonElement);
    root.appendChild(divElement);
})


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btnClick = document.getElementById('btnClick');

btnClick.onclick = () => {
    let myForms = document.forms;
    for (let form of myForms) {
        for (let formInput of form) {
            console.log(formInput.value);
        }
    }
}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
document.getElementById('root');
const createTable = (row, column, targetTag) => {
    let target = document.getElementById(targetTag);
    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tableRow = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td');
            td.innerText = 'Porshe';
            tableRow.appendChild(td)
        }
        table.appendChild(tableRow)
    }
    target.appendChild(table)
}
createTable(5, 3, 'root');

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.


//==================    РОБОТА В АУДИТОРІЇ   =======================
//- Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let textInput = document.getElementById('text1');
let btnSubmit = document.getElementById('btnOk');
const words = ['fuck', 'shit', 'beach'];
btnSubmit.onclick = (ev) => {
    let value = textInput.value;
    console.log(value);
    let includes = words.includes(value);
    if (includes) {
        alert('Attention you say obscene words')
    }
}

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let textInput1 = document.getElementById('text2');
let btnCheck = document.getElementById('btn2');
btnCheck.onclick = () => {
    let split = textInput1.value.split(' ');
    for (const newWords of words) {
        if (split.includes(newWords)) {
            alert('Your enter obscene sentences')
        }
    }
}


