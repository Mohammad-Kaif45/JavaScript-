// Write a BMI calculator function
function BMI(weight, height) {
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overwight");
} else {
    console.log(Obese);
}

}


BMI(80,1.75);

// Create a greet function with default name
function greet(name = "User") {
    console.log("Hello, " + name + "!");
}
greet(); // Output: Hello, User!
greet("Alice"); // Output: Hello, Alice!

// Sum all numbers using rest parameter
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }           
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Create a closure counter function

function createCounter() {
    let count = 0; // This variable is enclosed in the closure
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Write a function that returns another function
function outerFunction() {
    return function innerFunction() {
        console.log("Hello from the inner function!");
    };  
}
const innerFunc = outerFunction();
innerFunc(); // Output: Hello from the inner function!

//Use a function to log even numbers in array
let arr = [1, 2, 3, 4, 5, 6];
function evenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
}
}
evenNumbers(arr);

// Create a pure function to add tax
function addTax(price, taxRate) {
    return price + (price * taxRate);
}
console.log(addTax(100, 0.1)); // Output: 110

// Use IIFE to show welcome message
(function () {
    console.log("Welcome");
})(); // IIFE (Immediately Invoked Function Expression)

// Write a discount calculator (HOF style)
function discountCalculator(discountRate) {
    return function(price) {
        return price - (price * discountRate);
    };  
}
const applyDiscount = discountCalculator(0.2);

// Make a toUpperCase transformer using HOF
function toUpperCaseTransformer() {
    return function(str) {
        return str.toUpperCase();
    };  
}
const upperCase = toUpperCaseTransformer();
console.log(upperCase("hello")); // Output: HELLO