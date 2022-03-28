let passengers = document.createElement("h1");
let defaults = 0;

passengers.innerText = "Total: " + defaults;

function increment() {
    let increments = defaults += 1;
    passengers.innerText = "Total: " + increments;
}
