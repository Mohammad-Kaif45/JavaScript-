let body = document.querySelector("body");

let products = [
    {
        name: "Laptop",
        price: "₹65,000",
        brand: "Dell",
        image: "laptop.jpg",
        rating: "4.8"
    },
    {
        name: "Mouse",
        price: "₹700",
        brand: "Logitech",
        image: "mouse.jpg",
        rating: "4.8"
    },
    {
        name: "Keyboard",
        price: "₹1,200",
        brand: "HP",
        image: "keyboard.jpg",
        rating: "4.8"
    },
    {
        name: "Headphones",
        price: "₹2,500",
        brand: "Boat",
        image: "headphone.jpg",
        rating: "4.8"
    }
];

for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.src = products[i].image;
    image.alt = products[i].name;

     let name = document.createElement("h2");
    name.textContent = products[i].name;

    let price = document.createElement("p");
    price.textContent = `Price: ${products[i].price}`;

    let brand = document.createElement("p");
    brand.textContent = `Brand: ${products[i].brand}`;

    let rating = document.createElement("p");
    rating.textContent = `Rating: ${products[i].rating}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(brand);
    card.appendChild(rating);

    body.appendChild(card);
}

