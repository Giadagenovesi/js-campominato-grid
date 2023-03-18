// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Creare una griglia 10x10 con i numeri da 1 a 100
// Per ogni numero generato genero le caselle della griglia
// Ogni volta che clicco su un quadrato questo si colora di azzurro.

// Dichiarazioni:
let numberOfSquares = "";
const difficultSelector = document.getElementById("difficult");

const playBtn = document.querySelector(".play-btn")
const grid = document.querySelector(".grid");

playBtn.addEventListener("click", function() {
    grid.innerHTML = "";

    if (difficultSelector.value === "easy") {
        numberOfSquares = 100; 
    } else if (difficultSelector.value === "medium") {
        numberOfSquares = 81;
    } else {
        numberOfSquares = 49;
    }
    for (let i = 1; i <= numberOfSquares; i++) {
        const square = document.createElement ("div");
        square.classList.add("square", difficultSelector.value);
        square.innerHTML = i;
        square.addEventListener("click", userClick) 
        grid.append(square);
    }
}) 
  
/////////////////////////////////
// FUNCTION

//Al click del utente cambia il colore dello sfondo del quadrato
function userClick() {
    this.classList.toggle("lightblue");
    console.log(this.innerText);
}



