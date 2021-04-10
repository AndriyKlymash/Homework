//                     ======= Додатково  =======
//-  Створити функцію конструктор для об'єкту який описує теги
//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
function DescribesTags(name, description, arrayAttributes) {
    this.tagName = name;
    this.description = description;
    this.arrayAttributes = arrayAttributes;
}


let tagA = new DescribesTags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {
            nameAttributes: 'href',
            action: 'Задает адрес документа, на который следует перейти.'
        },
        {
            nameAttributes: 'download',
            action: 'При наличии атрибута download браузер не переходит по ссылке, а предложит скачать документ, указанный в адресе ссылки.'
        }])
console.log(tagA);

let tagDiv = new DescribesTags('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [{
        nameAttributes: 'align',
        action: 'Задает выравнивание содержимого тега <div>.'
    },
        {
            nameAttributes: 'title',
            action: 'Добавляет всплывающую подсказку к содержимому.'
        }])
console.log(tagDiv);

let tagH1 = new DescribesTags('<h1>', 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
    [{
        nameAttributes: 'class',
        action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
    },
        {
            nameAttributes: 'hidden',
            action: 'Скрывает содержимое элемента от просмотра.'
        }])
console.log(tagH1);

let tagSpan = new DescribesTags('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{
        nameAttributes: 'hidden',
        action: 'Скрывает содержимое элемента от просмотра.'
    },
        {
            nameAttributes: 'dir',
            action: 'Задает направление и отображение текста — слева направо или справа налево.'
        }])
console.log(tagSpan);

let tagInput = new DescribesTags(' <input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [{
        nameAttributes: 'accept',
        action: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
    },
        {
            nameAttributes: 'accesskey',
            action: 'Переход к элементу с помощью комбинации клавиш.'
        }
    ])
console.log(tagInput);

let tagForm = new DescribesTags('<form>', 'Связывает поле с формой по её идентификатору.',
    [{
        nameAttributes: 'id',
        action: 'Указывает имя стилевого идентификатора.'
    }])
console.log(tagForm);

let tagOption = new DescribesTags(' <option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    [{
        nameAttributes: 'disabled',
        action: 'Заблокировать для доступа элемент списка.'
    },
        {
            nameAttributes: 'selected',
            action: 'Заранее устанавливает определенный пункт списка выделенным.'
        }])
console.log(tagOption);

let tagSelect = new DescribesTags('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    [{
        nameAttributes: 'multiple',
        action: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
    },
        {
            nameAttributes: 'size',
            action: 'Количество отображаемых строк списка.'
        }])
console.log(tagSelect);


//-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

class Tags {
    constructor(titleOfTag, description, attrs) {
        this.titleOfTag = titleOfTag;
        this.descroption = description;
        this.attrs = attrs;
    }
}

let tagsA = new Tags('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {
            nameAttributes: 'href',
            action: 'Задает адрес документа, на который следует перейти.'
        },
        {
            nameAttributes: 'download',
            action: 'При наличии атрибута download браузер не переходит по ссылке, а предложит скачать документ, указанный в адресе ссылки.'
        }])
console.log(tagsA);

let tagsDiv = new Tags('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [{
        nameAttributes: 'align',
        action: 'Задает выравнивание содержимого тега <div>.'
    },
        {
            nameAttributes: 'title',
            action: 'Добавляет всплывающую подсказку к содержимому.'
        }])
console.log(tagsDiv);

let tagsH1 = new Tags('<h1>', 'Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
    [{
        nameAttributes: 'class',
        action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
    },
        {
            nameAttributes: 'hidden',
            action: 'Скрывает содержимое элемента от просмотра.'
        }])
console.log(tagsH1);

let Span = new Tags('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{
        nameAttributes: 'hidden',
        action: 'Скрывает содержимое элемента от просмотра.'
    },
        {
            nameAttributes: 'dir',
            action: 'Задает направление и отображение текста — слева направо или справа налево.'
        }])
console.log(Span);

let tagsInput = new DescribesTags(' <input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [{
        nameAttributes: 'accept',
        action: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
    },
        {
            nameAttributes: 'accesskey',
            action: 'Переход к элементу с помощью комбинации клавиш.'
        }
    ])
console.log(tagsInput);

let tagsForm = new DescribesTags('<form>', 'Связывает поле с формой по её идентификатору.',
    [{
        nameAttributes: 'id',
        action: 'Указывает имя стилевого идентификатора.'
    }])
console.log(tagsForm);

let tagsOption = new DescribesTags(' <option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    [{
        nameAttributes: 'disabled',
        action: 'Заблокировать для доступа элемент списка.'
    },
        {
            nameAttributes: 'selected',
            action: 'Заранее устанавливает определенный пункт списка выделенным.'
        }])
console.log(tagsOption);

let tagsSelect = new DescribesTags('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
    [{
        nameAttributes: 'multiple',
        action: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
    },
        {
            nameAttributes: 'size',
            action: 'Количество отображаемых строк списка.'
        }])
console.log(tagsSelect)


//-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляет його в поточний об'єкт car

class Cars {
    constructor(model, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive(speed) {
        document.write(`Їдемо зі швидкістю ${speed} kilometers per hour`);
        document.write('<br>');
    }

    info() {
        document.write(`Інформація про автомобіль : ${this.model}, ${this.year}, ${this.maxSpeed}, ${this.engineCapacity}`);
        document.write('<br>');
    }

    increaseMaxSpeed(newSpeed) {
        document.write(`Максимальна швидкість = ${newSpeed + this.maxSpeed}`);
        document.write('<br>')
    }


    changeYear(newValue) {
        document.write(`Рік випуску авто: ${newValue}`);
        document.write('<br>');
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class Driver {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let andrii = new Cars('Camry', 2012, 190, '3.5');
console.log(andrii);
andrii.drive(90);
andrii.info();
andrii.increaseMaxSpeed(50);
andrii.changeYear(2020);
andrii.addDriver(new Driver('Andriy', 'Klymash', 20));
console.log(andrii);


//                             РОБОТА В АУДИТОРІЇ
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function CreateCars(model, brand, year, maxSpeed, capacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = function () {
        document.write(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        document.write('<br>');
    }
    this.drive();

    this.info = function () {
        document.write(`Інфа про автомобіль Model: ${this.model}, Brand: ${this.brand}, Year: ${this.year}, Engine capacity: ${this.capacity} liters`);
        document.write('<br>')
    }
    this.info();

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        document.write(`Максимальна швидкість: ${this.maxSpeed}`);
        document.write('<br>')
    }
    this.increaseMaxSpeed(100);

    this.changeYear = function (newValue) {
        this.year = newValue;
        document.write(`Новий рік випуску: ${this.year}`);
        document.write('<br>')
    }
    this.changeYear(2021)


    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let car = new CreateCars('Q8', 'Audi', 2020, 300, 3.0);
let driver = new Driver('Andriy', 'Klymash', 20)
car.addDriver(driver);
console.log(car);


//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car {
    constructor(model, brand, year, maxSpeed, capacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
        document.write('<br>');
    }

    info() {
        document.write(`Information about car: ${this.model} ${this.brand} ${this.year}`)
        document.write('<br>');
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        document.write(`Максимальну швидкість збільшено ${this.maxSpeed}`)
        document.write('<br>')
    }

    changeYear(newValue) {
        this.year = newValue;
        document.write(`Змінено рік випуску авто: ${newValue}`);
        document.write('<br>')
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

class DriverYura {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let yuriy = new Car('Passat CC', 'Volkswagen', 2015, 220, 2);
yuriy.drive();
yuriy.info();
yuriy.increaseMaxSpeed(30)
yuriy.changeYear(2018);
let driverYura = new DriverYura('Yuriy', 'Kysilevuch', 20);
yuriy.addDriver(driverYura);
console.log(yuriy);

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let girl1 = new Cinderella('Alyona', 20, 36);
let girl2 = new Cinderella('Marichka', 19, 35);
let girl3 = new Cinderella('Dasha', 23, 38);
let girl4 = new Cinderella('Iryna', 22, 36);
let girl5 = new Cinderella('Yaryna', 25, 41);
let girl6 = new Cinderella('Vasylyna', 24, 37);
let girl7 = new Cinderella('Valeria', 28, 38);
let girl8 = new Cinderella('Natalia', 21, 40);
let girl9 = new Cinderella('Veronika', 27, 34);
let girl10 = new Cinderella('Julia', 29, 39);

let girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];

class Prince extends Cinderella {
    constructor(name, age, footSize, foundShoe) {
        super(name, age, footSize);
        this.foundShoe = foundShoe;
    }
}

let boy = new Prince('Andriy', 20, 35, 38);
console.log(boy);

for (let girl of girls) {
    if (girl.footSize === boy.foundShoe) {
        console.log(`${girl.name}`);
    }
}

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella2(name,age,footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize;

}
let girl = new Cinderella2('Alyona', 20, 36);
let girlC2 = new Cinderella2('Marichka', 19, 35);
let girlC3 = new Cinderella2('Dasha', 23, 38);
let girlC4 = new Cinderella2('Iryna', 22, 36);
let girlC5 = new Cinderella2('Yaryna', 25, 41);
let girlC6 = new Cinderella2('Vasylyna', 24, 37);
let girlC7 = new Cinderella2('Valeria', 28, 38);
let girlC8 = new Cinderella2('Natalia', 21, 40);
let girlC9 = new Cinderella2('Veronika', 27, 34);
let girlC10 = new Cinderella2('Julia', 29, 39);

let arrayGirls = [girl, girlC2, girlC3,girlC4,girlC5,girlC6,girlC7,girlC8,girlC9,girlC10];

function Prince2(name,age,foundShoe) {
    this.name=name;
    this.age=age;
    this.foundShoe=foundShoe;
    this.find = function (arrayGirls) {
        for (let girl of arrayGirls) {
            if(girl.footSize===boyPrince.foundShoe){
                console.log(`Імя знайденої попелюшки: ${girl.name}`)
            }
        }
    }
}

let boyPrince = new Prince2('Valeriy', 35,40);
boyPrince.find(arrayGirls);




//      ==============  ДЗ нова  ===========
//Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class Computer {
    constructor(ram, processor, name) {
        this.ram = ram;
        this.processor = processor;
        this.name = name;
    }

    working() {
        console.log('Computer is on');
    }
}

let pcBasic = new Computer(8, 400, 'samsung');
pcBasic.working();

//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Laptop extends Computer {
    constructor(ram, processor, name, diagonal, power, battery) {
        super(ram, processor, name);
        this.diagonal = diagonal;
        this.battery = power / (this.diagonal * this.ram);
    }
}

let asus = new Laptop('8', 500, 'asus', 17, 1000);
console.log(asus);

//Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
    constructor(ram, processor, name, diagonal, power,battery, weight) {
        super(ram, processor, name, diagonal,battery, power,);
        this.weight = weight;
    }

    eror() {
        if (this.weight > 2 && this.battery < 4) {
            console.log('Eror')
        }
    }
}

let acerUltrabook = new Ultrabook(12, 400, 'acer', 15, 600, 3,4);
console.log(acerUltrabook);
acerUltrabook.eror();

//Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class BasicPC extends Computer{
    constructor(ram, processor, name,power, fps, gameName) {
        super(ram, processor, name);
        this.fps=power/ram;
        this.gameNAme=gameName;
        this.power=power;
    }
    run(){
        console.log(`You are playing ${this.gameNAme} with ${this.fps}`)
    }

    procUp(up){
        if(up<=0.1){
            this.power=this.power*up;
            console.log(`Потужність збільшено на ${this.power}`);
        }
    }
    memory(encrease){
        if(encrease===2){
            this.ram=this.ram*2;
            console.log(`Потужність збільшено в два рахи ${this.ram}`)
        }
    }
}

let pc1 = new BasicPC(16, 800,'lenovo', 900, 120,'FIFA2021');
console.log(pc1);
pc1.run();



//Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
pc1.procUp(0.1);
pc1.memory(2);




//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Cinderela(name, age,footSize) {
//     this.name=name;
//     this.age=age;
//     this.footSize=footSize;
// }
// let girlAlyona = new Cinderella2('Alyona', 20, 36);
// let girlMarichka = new Cinderella2('Marichka', 19, 35);
// let girlDasha = new Cinderella2('Dasha', 23, 38);
// let girlIryna = new Cinderella2('Iryna', 22, 36);
// let girlIryna = new Cinderella2('Yaryna', 25, 41);
// let girlIryna = new Cinderella2('Vasylyna', 24, 37);
// let girlC = new Cinderella2('Valeria', 28, 38);
// let girlC = new Cinderella2('Natalia', 21, 40);
// let girlC = new Cinderella2('Veronika', 27, 34);
// let girlC = new Cinderella2('Julia', 29, 39);