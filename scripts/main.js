async function takeJoke() {
    const p = await fetch("https://sv443.net/jokeapi/v2/joke/Dark");
    const joke = await p.json();
    
    let type = joke["type"];

    if (type == "twopart") {
        document.getElementById('joke').innerHTML = joke["setup"];
        document.getElementById('joke2').innerHTML = joke["delivery"];
    } else {
        takeJoke();
    }
}

document.getElementById('butt').addEventListener("click", () => {
    takeJoke();
});