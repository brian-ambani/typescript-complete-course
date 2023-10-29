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

console.log(user);
