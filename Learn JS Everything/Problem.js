// Write a program that prints A, B, C, D, or F based on marks
let marks = 30; // Example marks

if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// Given player1 and player2's choice, print winner or draw
let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
    console.log("Draw");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 wins");
} else {
    console.log("Player 2 wins");
}


let isLoggedIn = true;
let isAdmin = false;
// Show different messages based on combination
if (isLoggedIn && isAdmin) {
    console.log("Welcome Admin!");
} else if (isLoggedIn && !isAdmin) {
    console.log("Welcome User!");
} else {
    console.log("Please log in.");
}

let weather = "rainy";
// Use switch-case to print what to wear
switch (weather) {
    case "sunny":
        console.log("Wear sunglasses");
        break;  
    case "rainy":
        console.log("Take an umbrella");
        break;
    case "snowy":
        console.log("Wear a coat");
        break;
    default:
        console.log("Check the weather forecast");
}

// Age checker:
let age = 10;
if (age < 13) {
    console.log("You are a child.");    
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

