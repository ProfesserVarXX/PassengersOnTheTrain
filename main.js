let passengers = document.querySelector(".person");
let defaults = 0;

passengers.innerHTML = "Total: " + defaults;
document.body.appendChild(passengers);

function increment() {
    let increments = defaults += 1;
    passengers.innerHTML = "Total: " + increments;
    document.body.appendChild(passengers)
}
