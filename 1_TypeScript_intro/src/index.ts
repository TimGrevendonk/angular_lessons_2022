let i = "hello typescript";

console.log(i);

async function Calculate(num1, num2) {
    console.log(num1, num2);
    
}

let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
let color: string = "blue";
let sentence: string = `Hello, my favourite color is ${color}.`;
let iDontExist: undefined = undefined;
let iAmNull: null = null;
let aSymbol: symbol = Symbol("a symbol"); 

let names: string[] = ["steven", "joost", "rikkerd"];
names.push("hagrid");
// names.push(117); // Argument of type 'number' is not assignable to parameter of type 'string'

// Make an object with parameters.
let dog  = {
    id : 1,
    name: "Otto",
    breed: "worst"
}
// Change the breed value of the dog object.
dog.breed = "worsthond"
// Call the name value of the dog object.
console.log(dog.name);

// Redefine the object (must give all parameters).
dog = {
    id: 1,
    name: "chylo",
    breed: "maltezer"
}
console.log(dog.name);

// type any = i don't know what i wil get in return, will be any type.
let age: any;
age = 1;
age = "test";
age = true;

// functions give a type to the parameters, and what the return type will be. 
function add(x: number, y: number) : number{
    return x + y;
}
console.log(add(127, 343));

function say(name: string, surname: string) : void {
    console.log("hello " + name + " " + surname);
}
console.log(say("Tim", "Grevendonk"));

// optional values
function optional(x: number, y? : number) : number {
    if (y = null){
        return x;
    }
    return x + y;
}
console.log(optional(7));
console.log(optional(3, 5));


// default values
function defaults(x: number = 80) : number {
    return x
}
console.log(defaults(3));
console.log(defaults());

// Define class.
class Point {
    x: number;
    y: number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    
    add(p: Point) : Point{
        return new Point(this.x + p.x, this.y + p.y);
    }
}

// Inheritance.
class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z:number){
        // Always needs a super call to use the constructor of the superclass.
        super(x, y)
        this.z = z;
    }

    add(p: Point3D): Point3D {
        let point2D = super.add(p);
        return new Point3D(point2D.x, point2D.y, this.z + p.z);
    }
} 

let point1 = new Point(5, 30);
let point2 = new Point(10, 20);
console.log(point1.add(point2));

abstract class Bike {
    // Can only be a parent of a class, never instantiated.
    abstract execute() :string;
}
class Frame extends Bike {
    execute(): string {
        console.log("abstract executed");
        return "frame";
    }
}

// Intersection type:
export interface FirstInterface{
    value1: string;
}
export interface SecondInterfcae{
    value2: number;
}
let intersection: FirstInterface & SecondInterfcae = {
    value1: "1",
    value2: 2
};

// string literals: use of pipe symbol |
type Direction =
| "north"
| "east"
| "south"
| "west";
function move(distance: number, direction: Direction ){
    console.log("moved");
}
move(3, "north");
// move(2, "nurth"); // error, nurth is not an option.