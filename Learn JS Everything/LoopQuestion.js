// print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let str = "Computer";
for (let i = str.length - 1; i >= 0; i--) {
    // want to print in same line
    process.stdout.write(str[i]);
}
console.log(); // print a newline after the reversed string

let nums = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of nums) {
    sum += num;
}
console.log(sum);

let name = "Kaif";
for (let char of name) {
    console.log(char);
}

// Print all object keys and values using for-in
let obj = { name: "Kaif", age: 25, city: "New York" };
for (let key in obj) {
    console.log(key, obj[key]);
}

// Use continue to skip a specific number
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the number 5
    }   
    console.log(i); 
}

// Pattern: Print triangle using *
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Sum of even numbers in an array using forEach
let numbers = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
numbers.forEach((num) => {
    if (num % 2 === 0) {
        evenSum += num;
    }
});
console.log("Sum of even numbers:", evenSum);
