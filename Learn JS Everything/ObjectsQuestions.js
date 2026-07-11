// Create an object for a book (title, author, price)
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99
}
console.log(book);

// Access properties using both dot and bracket
console.log(book.title); // Dot notation
console.log(book["author"]); // Bracket notation
console.log(book["price"]); // Bracket notation

// Write a nested object (user with address and location)
let user = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "New York",
        location: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};
console.log(user.address.city);

// Destructure name and age from a student object
let student = {
    name: "Alice",
    age: 20,
    grade: "A"
};
let { name, age } = student;
console.log(name, age);

// Loop through keys and values of an object
for (let key in student) {
    console.log(key, student[key]);
}

// Convert object to array using Object.entries()
let entries = Object.entries(student);
console.log(entries);

// Copy an object using spread operator
let newStudent = { ...student };
console.log(newStudent);

// Create a deep copy of an object with nested structure
let deepCopy = JSON.parse(JSON.stringify(user));
console.log(deepCopy);

// Use optional chaining to safely access deep values
let userLocation = user.address?.location?.lat;
console.log(userLocation); // 40.7128

// Use a variable as a key using computed properties
let key = "grade";
let studentWithDynamicKey = {
    name: "Bob",    
    [key]: "B"
};
console.log(studentWithDynamicKey.grade); // B