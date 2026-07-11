// for loop

for (let i = 0; i < 5; i++) {
 console.log(i);
}

// while loop -> Condition is checked before running
let i = 0;
while (i < 5) {
 console.log(i);
 i++;
}

// do whileloop -> Runs at least once, even if condition is false

let j = 6;
do {
 console.log(j);
 j++;
} while (j < 5);

// break and continue

// break : Exit loop completely
// continue : Skip current iteration and move to next

for (let i = 1; i <= 5; i++) {
 if (i === 3) continue;
 console.log(i); // Skips 3
}

// The for...of statement in JavaScript executes a loop that operates directly on a sequence of values sourced from an iterable object. It provides a clean, modern syntax introduced in ES6 to read data from collections without managing index counters or exit conditions manually.

for (let char of "Sheryians") {
 console.log(char);
}

// forEach – Arrays
let nums = [10, 20, 30];
nums.forEach((num) => {
 console.log(num);
});

// Cleaner than for for arrays, but you can’t break/return

// for-in – Objects (and arrays if needed)
let user = { name: "Harsh", age: 26 };
for (let key in user) {
 console.log(key, user[key]);
}
