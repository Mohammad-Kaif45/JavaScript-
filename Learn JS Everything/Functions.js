// 🧠 What are Functions?
// Functions are blocks of reusable logic.
// Instead of repeating the same task again and again, wrap it in a function and reuse it with
// different inputs.
// Think of a function like a vending machine:
// Input: you give money + item code
// Output: it gives you the item
// Logic: hidden inside

// Function Declarations
function greet() {
 console.log("Welcome to Sheryians!");
}
greet(); // You define it once, then call it whenever needed.

// � Parameters vs Arguments

function greet(name) {
 console.log("Hello " + name);
}
greet("Harsh");

// name is a parameter
// "Harsh" is the argument you pass

// 🌀 Return Values
function sum(a, b) {
 return a + b;
}
let total = sum(5, 10); // total is 15

// return sends back a result to wherever the function was called
// After return , function exits


// Functions stored in variables
// Cannot be hoisted (you can’t call them before they’re defined)

// Default + Rest + Spread
function multiply(a = 1, b = 1) {
 return a * b;
}
function sum(...nums) { // nums
 return nums.reduce((acc, val) => acc + val, 0);
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread

const add = (a,b) => {
    return a +b;
}
console.log(add(5,10));

function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

console.log(arr2);

//Merge arryas
let a = [1,2];
let b = [3,4];

let c = [...a, ...b];

console.log(c);

function shout(msg) {
 return msg.toUpperCase();
}
function processMessage(fn) {
 console.log(fn("hello"));
}
processMessage(shout);

function createMultiplier(x) {
 return function (y) {
 return x * y;
 };
}
let double = createMultiplier(2);
console.log(double(5)); // 10

// Closures = when a function remembers its parent scope, even after the parent has finished.
function outer() {
 let count = 0;
 return function () {
 count++;
 console.log(count);
 };
}
let counter = outer();
counter(); // 1
counter(); // 2
// Even after outer is done, counter still remembers count .

// IIFE – Immediately Invoked Function Expression
(function () {
    console.log("Hello");
})();

hello(); // works
function hello() {
 console.log("Hi");
}


