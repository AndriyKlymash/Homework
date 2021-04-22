//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let text = document.getElementById('differentText');
let btn = document.getElementById('btn');
text.value = localStorage.getItem('text1');

btn.onclick = () => {
    let val = text.value;
    console.log(val);
    localStorage.setItem('text1', val);
}


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let btnSubmit = document.getElementById('submit');
let textInp = document.getElementById('textInp');
let formArea = document.getElementById('formArea');
let rad = document.form.selectGender;

btnSubmit.onclick = (ev) => {
    localStorage.setItem('name', textInp.value);
    localStorage.setItem('info', formArea.value);
    localStorage.setItem('gender', rad.value)
}

rad.value = localStorage.getItem('gender');
textInp.value = localStorage.getItem('name');
formArea.value = localStorage.getItem('info');


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let btnSave = document.getElementById('save');
let textInfo = document.getElementById('inform');
btnSave.onclick = () => {
    localStorage.setItem('User_info', textInfo.value);
}
textInfo.value = localStorage.getItem('User_info');


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


