// დავალება 1: შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. 
// შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

alert(squareOfTwo());

function squareOfTwo(){
    return 2 * 2;
}


// 2.
class Shape{
    name;
    constructor(name){
        this.name = name;
    }

    Area(){
        return "Area calculation not implemented for generic shape.";
    }
}

// 3.
class Circle extends Shape{
    radius;
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }

    Area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    width;
    height;

    constructor(name,width,height){
        super(name);
        this.width = width;
        this.height = height;
    }

    Area(){
        return this.width * this.height;
    }
}

class Triangle extends Shape{
    base;
    height;
    constructor(name,base,height){
        super(name);
        this.base = base;
        this.height = height;
    }

    Area(){
        return (this.base * this.height)/2;
    }
}

//4.
let shape = new Shape("shape");
const circle = new Circle("circle",5);
let rectangle = new Rectangle("rectangle",3,4);
let triangle = new Triangle("triangle",4,6);

alert(`Area of Circle: ${circle.Area()}`);
alert(`Area of Rectangle: ${rectangle.Area()}`);
alert(`Area of Triangle: ${triangle.Area()}`);
alert(`${shape.Area()}`);