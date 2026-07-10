// Create an array of student names and print each name using a loop.
let students = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Filter even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Map prices to include GST (18%)
let prices = [100, 200, 300];
let pricesWithGST = prices.map(price => price * 1.18);
console.log(pricesWithGST);

// Reduce salaries to calculate total payroll
let salaries = [50000, 60000, 70000];
let totalPayroll = salaries.reduce((total, salary) => total + salary, 0);
console.log(totalPayroll);

// Find the first student with grade A
let studentGrades = [
    { name: "Alice", grade: "B" },
    { name: "Bob", grade: "A" },
    { name: "Charlie", grade: "C" }
];
let firstAStudent = studentGrades.find(student => student.grade === "A");
console.log(firstAStudent);

// Write a function to reverse an array
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

// Sort array of ages in ascending order
let ages = [25, 30, 18, 22, 28];
ages.sort((a, b) => a - b);
console.log(ages);

// Sort array of ages in descending order
ages.sort((a, b) => b - a);
console.log(ages);

// Destructure first two elements of an array
let colors = ["red", "blue", "green", "yellow"];
let [first, second] = colors;
console.log(first, second);

// Destructuring is a JavaScript feature that allows you to unpack (extract) values from arrays or properties from objects and assign them to separate variables in a single statement.

// Destructuring means extracting values from an array or object and storing them into individual variables.

// Destructuring is a JavaScript syntax that lets us extract values from arrays or properties from objects and assign them to variables in a clean and concise way, instead of accessing them one by one using indexes or property names.

// Use some() to check if any student failed
let studentScores = [85, 90, 78, 92, 88];
let hasFailed = studentScores.some(score => score < 34);
console.log(hasFailed);

// Use spread to copy and add new item
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4];
console.log(newArray); // [1, 2, 3, 4]
