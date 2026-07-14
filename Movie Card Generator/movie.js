let body = document.querySelector("body");
let movies = [
    {
        name: "Inception",
        rating: "8.8",
        genre: "Sci-Fi",
        image: "inception.jpg"
    },
    {
        name: "Game Of Thrones",
        rating: "8.7",
        genre: "Thriller",
        image: "got.jpg"
    },
    {
        name: "Avengers",
        rating: "8.4",
        genre: "Action",
        image: "avengers.jpg"
    }
];


for (let i = 0; i < movies.length; i++) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h1");
    name.textContent = `Name: ${movies[i].name}`;

    let ratings = document.createElement("p");
    ratings.textContent = `Ratings: ${movies[i].rating}`;

    let genre = document.createElement("p");
    genre.textContent = `Genre: ${movies[i].genre}`;

    let img = document.createElement("img");
    img.src = movies[i].image;
    img.alt = movies[i].name;


    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(ratings);
    card.appendChild(genre);

    body.appendChild(card);
}