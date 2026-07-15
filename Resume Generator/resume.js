let body = document.querySelector("body");

let resume = {
    name: "Kaif Ansari",
    role: "Java Full Stack Developer",
    image: "Profile.png",
    about: "Passionate Computer Science student learning Java, Spring Boot and Web Development.",

    education: [
        "B.Tech CSE - Parul University"
    ],

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Spring Boot",
        "MySQL"
    ],

    projects: [
        "Student Profile Card",
        "Shopping List",
        "Movie Cards",
        "Product Catalog"
    ],

    contact: {
        email: "kaif@example.com",
        phone: "+91 9876543210"
    }
};

// Container
let container = document.createElement("div");
container.classList.add("resume");

// Image
let img = document.createElement("img");
img.src = resume.image;

// Name
let name = document.createElement("h1");
name.textContent = resume.name;

// Role
let role = document.createElement("h2");
role.textContent = resume.role;

// About
let about = document.createElement("p");
about.textContent = resume.about;

// Education
let eduHeading = document.createElement("h3");
eduHeading.textContent = "Education";

let eduList = document.createElement("ul");

for(let i=0;i<resume.education.length;i++){

    let li=document.createElement("li");

    li.textContent=resume.education[i];

    eduList.appendChild(li);

}

// Skills
let skillHeading=document.createElement("h3");
skillHeading.textContent="Skills";

let skillList=document.createElement("ul");

for(let i=0;i<resume.skills.length;i++){

    let li=document.createElement("li");

    li.textContent=resume.skills[i];

    skillList.appendChild(li);

}

// Projects
let projectHeading=document.createElement("h3");
projectHeading.textContent="Projects";

let projectList=document.createElement("ul");

for(let i=0;i<resume.projects.length;i++){

    let li=document.createElement("li");

    li.textContent=resume.projects[i];

    projectList.appendChild(li);

}

// Contact
let contact=document.createElement("h3");
contact.textContent="Contact";

let email=document.createElement("p");
email.textContent=`Email: ${resume.contact.email}`;

let phone=document.createElement("p");
phone.textContent=`Phone: ${resume.contact.phone}`;

// Append
container.appendChild(img);
container.appendChild(name);
container.appendChild(role);
container.appendChild(about);

container.appendChild(eduHeading);
container.appendChild(eduList);

container.appendChild(skillHeading);
container.appendChild(skillList);

container.appendChild(projectHeading);
container.appendChild(projectList);

container.appendChild(contact);
container.appendChild(email);
container.appendChild(phone);

body.appendChild(container);