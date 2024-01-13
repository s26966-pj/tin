function addDiv() {
    let div = document.createElement("div");
    div.className = "container";
    document.querySelector(".main").appendChild(div)
}

function removeDiv() {
    let divs = document.querySelectorAll(".container")
    if (divs.length > 0) {
        document.querySelector(".main").removeChild(divs[0])
    }
}

function colorDiv() {
    let divs = document.querySelectorAll(".container")
    if (divs.length > 2) {
        divs[2].style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
}

function textDiv() {
    let divs = document.querySelectorAll(".container")
    divs.forEach((div) => div.innerText = "nowy tekst")
}