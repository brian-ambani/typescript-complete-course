// Basic types
let id: number = 5;
let company: string = "Flin Inc";
let isPublished: boolean = true;
let x: any = "Hello"; // any type

let ids: number[] = [1, 2, 3, 4, 5]; // array of numbers
let arr: any[] = [1, true, "Hello"]; // array of any type

// Tuple
let person: [number, string, boolean] = [1, "Brain", true]; // tuple

// Tuple Array  - array of tuples
let employee: [number, string][]; // array of tuples
employee = [
  [1, "Brain"],
  [2, "John"],
  [3, "Jill"],
];

// Union - can be more than one type
let pid: string | number;

pid = "22";
pid = 22;

// Enum - set of named constants
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Left);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2.Left);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// console.log(user);

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces

interface UserInterface {
  readonly id: number; // can't change
  name: string;
  age?: number; // optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// console.log(user1);

// Interfaces with functions

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

// console.log(add(1, 2));

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} of id ${this.id} is now registered`;
  }
}

const brain = new Person(425728, "Brain Ambani");
const mike = new Person(63739, "Mike Jordan");

console.log(brain.register());

// Subclasses
