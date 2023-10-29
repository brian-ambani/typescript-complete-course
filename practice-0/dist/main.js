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
// Tuple Array
let employee; // array of tuples
employee = [
    [1, "Brain"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid;
pid = "22";
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
