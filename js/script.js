// Creare una griglia 10x10 con i numeri da 1 a 100
// Per ogni numero generato genero le caselle della griglia
// Ogni volta che clicco su un quadrato questo si colora di azzurro.
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

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
  
///////////////////////////////////////////////////////
// FUNCTION

//Al click del utente cambia il colore dello sfondo del quadrato
function userClick() {
    this.classList.toggle("lightblue");
    console.log(this.innerText);
}



