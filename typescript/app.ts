//1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface IAnimal {
    typeOfMoving: string;
    voice: string;

    getInformation(): void;
}

class Cat implements IAnimal {
    name: string;
    color: string;
    typeOfMoving: string;
    voice: string;

    constructor(name: string, color: string, typeOfMoving: string, voice: string) {
        this.name = name;
        this.color = color;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }


    getInformation(): void {
        console.log(`My name is ${this.name}, my color is ${this.color}.I can ${this.typeOfMoving} and i can speak ${this.voice}`)
    }

}

const catTom = new Cat('Tom', 'silver', 'swiming', 'meaw');
catTom.getInformation()

class Bird implements IAnimal {
    name: string;
    color: string;
    typeOfMoving: string;
    voice: string;

    constructor(name: string, color: string, typeOfMoving: string, voice: string) {
        this.name = name;
        this.color = color;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }

    getInformation(): void {
        console.log(`${this.voice}. I can ${this.typeOfMoving}, my color is ${this.color}`)
    }
}

const birdKesha = new Bird('Kesha', 'green', 'flying', 'hi i am Kesha');
birdKesha.getInformation()

class Fish implements IAnimal {
    name: string;
    typeOfMoving: string;
    voice: string;

    constructor(name: string, typeOfMoving: string, voice: string) {
        this.name = name;
        this.typeOfMoving = typeOfMoving;
        this.voice = voice;
    }

    getInformation(): void {
        console.log(`I am a fish, my name ${this.name}, i can ${this.typeOfMoving} ${this.voice}`)
    }

}

const fishCaras = new Fish('Caras', 'swim', 'hohoho');
fishCaras.getInformation()

// 2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class AShape {
    arrOfSides: number[]


    protected constructor(arrOfSides: number[]) {
        this.arrOfSides = arrOfSides;
    }

    perimeter(): number {
        return;
    }

    area(): number {
        return;
    }
}

class Triangle extends AShape {
    constructor(side1: number, side2: number, side3: number) {
        super([side1, side2, side3])
    }

    perimeter(): number {
        let res = 0;
        for (const arrOfSide of this.arrOfSides) {
            res += arrOfSide;
        }
        return res;
    }

    area(): number {
        //S = √p(p - a)(p - b)(p - c)
        return  Math.sqrt(p*(p-this.arrOfSides[0])*(p-this.arrOfSides[1])*(p-this.arrOfSides[2]))
    }

    // gerArray() {
    //     console.log(this.arrOfSides);
    // }
}

const triangle1 = new Triangle(5, 10, 6);
console.log(triangle1.perimeter());
const p = triangle1.perimeter();
console.log(triangle1.area());

class Rectangle extends AShape{
    constructor(side1: number, side2: number) {
        super([side1,side2]);
    }
    perimeter(): number {
        let res=0;
        for (const arrOfSide of this.arrOfSides) {
            res+=arrOfSide;
        }
        return res;
    }

    area(): number {
       return this.arrOfSides[0]*this.arrOfSides[1]
    }
}

const rectangle1 = new Rectangle(10,20);
console.log(rectangle1.perimeter());
console.log(rectangle1.area());






