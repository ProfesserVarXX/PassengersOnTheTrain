let passengers = document.createElement("h1");
let defaults = 0;

let begin = passengers.innerHTML = "Total: " + defaults;
document.body.appendChild(begin);

function increment() {
    let increments = defaults += 1;
    let end = passengers.innerHTML = "Total: " + increments;
    document.body.appendChild(end)
}
