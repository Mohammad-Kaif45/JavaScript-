// An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2…).
// Arrays help you store multiple values in a single variable — numbers, strings, or even
// objects/functions.

// Creating & Accessing Arrays
let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80;
// Indexing starts from 0
// You can access, update, or overwrite values by index

// Common Array Methods
//  Modifiers (Change original array)

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order
console.log(arr);

// Iteration Methods

// map() -> Returns a new array with modified values
let prices = [100, 200, 300];
let taxed = prices.map(p => p * 1.18);

// filter() -> Filters out elements based on a condition.
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);

// reduce() -> Reduces the array to a single value.
let total = nums.reduce((acc, val) => acc + val, 0);


// forEach() -> Performs an action for each element (but returns undefined).

nums.forEach(n => console.log(n));

console.log(nums.find(n => n > 2));  // // First match
console.log(nums.some(n => n > 5)); // // At least one true
console.log(nums.every(n => n > 0)); // All true

// Destructuring & Spread

