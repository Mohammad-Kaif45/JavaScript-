// Task 1 : Select the heading of a page by ID and change its text to "Welcom to Sheriyans"
// let h1 = document.querySelector("#h1");
// h1.textContent = "Welcome to Sheriyans";
// console.dir(h1);
// Tasks
// Task 2 : Select all <li> elements and print their text using a loop.
let lis = document.querySelectorAll("li"); // 
lis.forEach(function(val){
    console.log(val.textContent);
});