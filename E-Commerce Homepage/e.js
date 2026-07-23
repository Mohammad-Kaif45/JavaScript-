let body = document.querySelector("body");

// Header
let header = document.createElement("header");
header.classList.add("header");
header.textContent = "Kaif Shopping Store";

// Navbar
let nav = document.createElement("nav");
nav.classList.add("navbar");

let menu = ["Home", "Products", "About", "Contact"];

for (let i = 0; i < menu.length; i++) {
    let item = document.createElement("a");
    item.textContent = menu[i];
    item.href = "#";
    nav.appendChild(item);
}

// Banner
let banner = document.createElement("div");
banner.classList.add("banner");
banner.textContent = "🔥 Big Sale - Up to 50% OFF";

// Products Container
let productContainer = document.createElement("div");
productContainer.classList.add("products");

let products = [
    {
        name: "Laptop",
        price: "₹65,000",
        image: "laptop.jpg"
    },
    {
        name: "Mouse",
        price: "₹700",
        image: "mouse.jpg"
    },
    {
        name: "Keyboard",
        price: "₹1,200",
        image: "keyboard.jpg"
    },
    {
        name: "Headphones",
        price: "₹2,500",
        image: "headphone.jpg"
    }
];

for (let i = 0; i < products.length; i++) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = products[i].image;

    let name = document.createElement("h3");
    name.textContent = products[i].name;

    let price = document.createElement("p");
    price.textContent = products[i].price;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    productContainer.appendChild(card);
}

// Footer
let footer = document.createElement("footer");
footer.classList.add("footer");
footer.textContent = "© 2026 Kaif Shopping Store";

// Add everything
body.appendChild(header);
body.appendChild(nav);
body.appendChild(banner);
body.appendChild(productContainer);
body.appendChild(footer);

