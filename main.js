const passengers = document.querySelector(".people");
let defaults = 0;

passengers.innerHTML = "Total: " + defaults;

function increment() {
    let increments = defaults += 100;
    passengers.innerHTML = "Total: " + increments;
}
