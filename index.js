const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://bgc2fobyzfltb4qxrbqvxumge40lgppc.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();