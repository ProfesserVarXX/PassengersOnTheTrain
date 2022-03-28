let passengers = document.createElement("h1");
document.body.appendChild(passengers.innerText = "Total: " + defaults);
let defaults = 0;

function increment() {
    let increments = defaults += 1;
    document.body.appendChild(passengers.innerText = "Total: " + increments)
}
