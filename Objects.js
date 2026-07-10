// What is an object?
// An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be any data type, including other objects or functions. Objects are used to represent real-world entities and their properties in programming. 

let student = {
 name: "Ravi",
 age: 21,
 isEnrolled: true
};

console.log(student);
// Key-Value Structure
// Keys are always strings (even if you write them as numbers or identifiers)
// Values can be anything – string, number, array, object, function, etc
console.log(student["name"]); // Ravi
console.log(student.age); // 21

// Dot vs Bracket Notation
// Use dot notation for fixed key names
// Use bracket notation for dynamic or multi-word keys

student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅

// Nesting and Deep Access -> Objects can have nested objects (objects inside objects)
let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001
 }
};
console.log(user.address.city); // Delhi

// Object Destructuring
let { name, age } = student;
console.log(name); // Ravi
console.log(age); // 21

// Looping Through Objects
// for-in loop
for (let key in student) {
 console.log(key, student[key]);
}

// Object.keys(), Object.values(), Object.entries()
Object.keys(student); // ["name", "age", "isEnrolled"]
Object.entries(student); // [["name", "Ravi"], ["age", 21], ...]


// Copying Objects
// Shallow Copy (one level deep)
let newStudent = { ...student };
let newOne = Object.assign({}, student);
// Deep Copy (nested levels)
let deepCopy = JSON.parse(JSON.stringify(user)); 