// select body
let body = document.querySelector("body");

// create card
let card = document.createElement("div");
card.classList.add("card");

// Name
let name = document.createElement("h1");
name.textContent = "Name: Kaif Ansari";

// course
let course = document.createElement("p");
course.textContent = "Course: B.Tech CSE";

// University
let university = document.createElement("p");
university.textContent = "University: Parul University";

//Image
let image = document.createElement("img");
image.setAttribute("src","Profile.png");
image.setAttribute("alt","profile image");

// Skills Heading
let skillHeading = document.createElement("h2");
skillHeading.textContent = "Skills";

// Skill List
let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "HTML";
let li2 = document.createElement("li");
li2.textContent = "CSS";

let li3 = document.createElement("li");
li3.textContent = "JavaScript";

// Add list items
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Add everything into card
card.appendChild(name);
card.appendChild(course);
card.appendChild(university);
card.appendChild(image);
card.appendChild(skillHeading);
card.appendChild(ul);

// Add card to body
body.appendChild(card);
