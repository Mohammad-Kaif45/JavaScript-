let ul = document.querySelector("#list");

let items = [
    "Milk",
    "Eggs",
    "Bread",
    "Rice",
    "Coffee"
];

for(let i = 0; i < items.length; i++){

    let li = document.createElement("li");

    li.textContent = items[i];

    ul.appendChild(li);
}

