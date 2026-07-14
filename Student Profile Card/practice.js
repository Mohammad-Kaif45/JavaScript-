// // select body
// let body = document.querySelector("body");

// // create card
// let card = document.createElement("div");
// card.classList.add("card");

// // Name
// let name = document.createElement("h1");
// name.textContent = "Name: Kaif Ansari";

// // course
// let course = document.createElement("p");
// course.textContent = "Course: B.Tech CSE";

// // University
// let university = document.createElement("p");
// university.textContent = "University: Parul University";

// //Image
// let image = document.createElement("img");
// image.setAttribute("src","Profile.png");
// image.setAttribute("alt","profile image");

// // Skills Heading
// let skillHeading = document.createElement("h2");
// skillHeading.textContent = "Skills";

// // Skill List
// let ul = document.createElement("ul");

// let li1 = document.createElement("li");
// li1.textContent = "Java";
// let li2 = document.createElement("li");
// li2.textContent = "Python";
// let li3 = document.createElement("li");
// li3.textContent = "JavaScript";
// let li4 = document.createElement("li");
// li4.textContent = "MySql";
// let li5 = document.createElement("li");
// li5.textContent = "MongoDB";

// // Add list items
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// ul.appendChild(li5);

// // Add everything into card
// card.appendChild(name);
// card.appendChild(course);
// card.appendChild(university);
// card.appendChild(image);
// card.appendChild(skillHeading);
// card.appendChild(ul);

// // Add card to body
// body.appendChild(card);

// Select body
let body = document.querySelector("body");

// Students Data
let students = [
    {
        name: "Kaif Ansari",
        course: "B.Tech CSE",
        university: "Parul University",
        image: "Profile.png",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        name: "Rahul Sharma",
        course: "BCA",
        university: "Delhi University",
        image: "Profile2.png",
        skills: ["Java", "Python", "SQL"]
    },
    {
        name: "Rahul Sharma",
        course: "BCA",
        university: "Delhi University",
        image: "Profile2.png",
        skills: ["Java", "Python", "SQL"]
    },
    {
        name: "Rahul Sharma",
        course: "BCA",
        university: "Delhi University",
        image: "Profile2.png",
        skills: ["Java", "Python", "SQL"]
    },
    {
        name: "Rahul Sharma",
        course: "BCA",
        university: "Delhi University",
        image: "Profile2.png",
        skills: ["Java", "Python", "SQL"]
    },
    {
        name: "Rahul Sharma",
        course: "BCA",
        university: "Delhi University",
        image: "Profile2.png",
        skills: ["Java", "Python", "SQL"]
    }
];

// Loop through students
for (let i = 0; i < students.length; i++) {

    // Create Card
    let card = document.createElement("div");
    card.classList.add("card");

    // Name
    let name = document.createElement("h1");
    name.textContent = `Name: ${students[i].name}`;

    // Course
    let course = document.createElement("p");
    course.textContent = `Course: ${students[i].course}`;

    // University
    let university = document.createElement("p");
    university.textContent = `University: ${students[i].university}`;

    // Image
    let image = document.createElement("img");
    image.src = students[i].image;
    image.alt = students[i].name;

    // Skills Heading
    let heading = document.createElement("h2");
    heading.textContent = "Skills";

    // Skills List
    let ul = document.createElement("ul");

    // Loop through skills
    for (let j = 0; j < students[i].skills.length; j++) {

        let li = document.createElement("li");
        li.textContent = students[i].skills[j];

        ul.appendChild(li);
    }

    // Add everything into card
    card.appendChild(name);
    card.appendChild(course);
    card.appendChild(university);
    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(ul);

    // Add card to body
    body.appendChild(card);
}