let body = document.querySelector("body");

let blogs = [
    {
        title: "Learn HTML",
        image: "html.jpg",
        description: "HTML is the foundation of every website. It defines the structure of web pages."
    },

    {
        title: "Learn CSS",
        image: "css.jpg",
        description: "CSS is used to style HTML pages and make them visually attractive."
    },

    {
        title: "Learn JavaScript",
        image: "javascript.jpg",
        description: "JavaScript adds interactivity and dynamic behavior to websites."
    },

    {
        title: "Learn React",
        image: "react.jpg",
        description: "React is a JavaScript library used for building modern user interfaces."
    },

    {
        title: "Learn Node.js",
        image: "node.jpg",
        description: "Node.js allows JavaScript to run on the server side."
    }
];

for(let i = 0; i < blogs.length; i++){

    // Create Blog Card
    let card = document.createElement("div");
    card.classList.add("card");

    // Image
    let img = document.createElement("img");
    img.src = blogs[i].image;
    img.alt = blogs[i].title;

    // Title
    let title = document.createElement("h2");
    title.textContent = blogs[i].title;

    // Description
    let desc = document.createElement("p");
    desc.textContent = blogs[i].description;

    // Button
    let button = document.createElement("button");
    button.textContent = "Read More";

    
    // Add Elements
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(button);

    body.appendChild(card);
}

