console.log("JS Loaded");

let inp = document.querySelector("input");
console.log(inp);
inp.addEventListener("input", function (d) {
    console.log(d.data);
});