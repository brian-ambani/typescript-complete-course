"use strict";
// Basic types
let id = 5;
let company = "Flin Inc";
let isPublished = true;
let x = "Hello"; // any type
let ids = [1, 2, 3, 4, 5]; // array of numbers
let arr = [1, true, "Hello"]; // array of any type
// Tuple
let person = [1, "Brain", true]; // tuple
// Tuple Array  - array of tuples
let employee; // array of tuples
employee = [
    [1, "Brain"],
    [2, "John"],
    [3, "Jill"],
];
// Union - can be more than one type
let pid;
pid = "22";
pid = 22;
// Enum - set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// user.id = 5; // error
// console.log(user);
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
// user1.id = 5; // error
console.log(user1);
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} of id ${this.id} is now registered`;
    }
}
const brain = new Person(425728, "Brain Ambani");
const mike = new Person(63739, "Mike Jordan");
// console.log(brain.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(4354543, "Shawn", "Developer");
// console.log(emp.register());
// Generics - reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["John", "Brain", "Jill"]);
// numArray.push("Hello"); // error
// strArray.push(1); // error
// console.log(numArray);
