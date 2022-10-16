let i = "hello typescript";
console.log(i);
async function Calculate(num1, num2) {
    console.log(num1, num2);
}
let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
let color = "blue";
let sentence = `Hello, my favourite color is ${color}.`;
let iDontExist = undefined;
let iAmNull = null;
let aSymbol = Symbol("a symbol");
let names = ["steven", "joost", "rikkerd"];
names.push("hagrid");
// names.push(117); // Argument of type 'number' is not assignable to parameter of type 'string'
// Make an object with parameters.
let dog = {
    id: 1,
    name: "Otto",
    breed: "worst"
};
// Change the breed value of the dog object.
dog.breed = "worsthond";
// Call the name value of the dog object.
console.log(dog.name);
// Redefine the object (must give all parameters).
dog = {
    id: 1,
    name: "chylo",
    breed: "maltezer"
};
console.log(dog.name);
// type any = i don't know what i wil get in return, will be any type.
let age;
age = 1;
age = "test";
age = true;
// functions give a type to the parameters, and what the return type will be. 
function add(x, y) {
    return x + y;
}
console.log(add(127, 343));
function say(name, surname) {
    console.log("hello " + name + " " + surname);
}
console.log(say("Tim", "Grevendonk"));
// optional values
function optional(x, y) {
    if (y = null) {
        return x;
    }
    return x + y;
}
console.log(optional(7));
console.log(optional(3, 5));
// default values
function defaults(x = 80) {
    return x;
}
console.log(defaults(3));
console.log(defaults());
// Define class.
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(p) {
        return new Point(this.x + p.x, this.y + p.y);
    }
}
// Inheritance.
class Point3D extends Point {
    z;
    constructor(x, y, z) {
        // Always needs a super call to use the constructor of the superclass.
        super(x, y);
        this.z = z;
    }
    add(p) {
        let point2D = super.add(p);
        return new Point3D(point2D.x, point2D.y, this.z + p.z);
    }
}
let point1 = new Point(5, 30);
let point2 = new Point(10, 20);
console.log(point1.add(point2));
class Bike {
}
class Frame extends Bike {
    execute() {
        console.log("abstract executed");
        return "frame";
    }
}
let intersection = {
    value1: "1",
    value2: 2
};
function move(distance, direction) {
    console.log("moved");
}
move(3, "north");
export {};
// move(2, "nurth"); // error, nurth is not an option.
