//1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cat = /** @class */ (function () {
    function Cat(name, color, typeOfMoving, voice) {
        this.name = name;
        this.color = color;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }
    Cat.prototype.getInformation = function () {
        console.log("My name is " + this.name + ", my color is " + this.color + ".I can " + this.typeOfMoving + " and i can speak " + this.voice);
    };
    return Cat;
}());
var catTom = new Cat('Tom', 'silver', 'swiming', 'meaw');
catTom.getInformation();
var Bird = /** @class */ (function () {
    function Bird(name, color, typeOfMoving, voice) {
        this.name = name;
        this.color = color;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }
    Bird.prototype.getInformation = function () {
        console.log(this.voice + ". I can " + this.typeOfMoving + ", my color is " + this.color);
    };
    return Bird;
}());
var birdKesha = new Bird('Kesha', 'green', 'flying', 'hi i am Kesha');
birdKesha.getInformation();
var Fish = /** @class */ (function () {
    function Fish(name, typeOfMoving, voice) {
        this.name = name;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }
    Fish.prototype.getInformation = function () {
        console.log("I am a fish, my name " + this.name + ", i can " + this.typeOfMoving + " " + this.voice);
    };
    return Fish;
}());
var fishCaras = new Fish('Caras', 'swim', 'hohoho');
fishCaras.getInformation();
// 2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var AShape = /** @class */ (function () {
    function AShape(arrOfSides) {
        this.arrOfSides = arrOfSides;
    }
    AShape.prototype.perimeter = function () {
        return;
    };
    AShape.prototype.area = function () {
        return;
    };
    return AShape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(side1, side2, side3) {
        return _super.call(this, [side1, side2, side3]) || this;
    }
    Triangle.prototype.perimeter = function () {
        var res = 0;
        for (var _i = 0, _a = this.arrOfSides; _i < _a.length; _i++) {
            var arrOfSide = _a[_i];
            res += arrOfSide;
        }
        return res;
    };
    Triangle.prototype.area = function () {
        //S = √p(p - a)(p - b)(p - c)
        return Math.sqrt(p * (p - this.arrOfSides[0]) * (p - this.arrOfSides[1]) * (p - this.arrOfSides[2]));
    };
    return Triangle;
}(AShape));
var triangle1 = new Triangle(5, 10, 6);
console.log(triangle1.perimeter());
var p = triangle1.perimeter();
console.log(triangle1.area());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(side1, side2) {
        return _super.call(this, [side1, side2]) || this;
    }
    Rectangle.prototype.perimeter = function () {
        var res = 0;
        for (var _i = 0, _a = this.arrOfSides; _i < _a.length; _i++) {
            var arrOfSide = _a[_i];
            res += arrOfSide;
        }
        return res;
    };
    Rectangle.prototype.area = function () {
        return this.arrOfSides[0] * this.arrOfSides[1];
    };
    return Rectangle;
}(AShape));
var rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.perimeter());
console.log(rectangle1.area());
