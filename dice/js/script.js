// Generare un numero random da 1 a 6, 
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// creare 2 variabili per il tiro dei dadi
// computer
const computerChoice = Math.floor(Math.random() * 6 + 1);
// player
const playerChoice = Math.floor(Math.random() * 6 + 1);

// variabile per il risultato
let result;

// verificare il vincitore tramite controlli 
// caso pareggio
if (computerChoice == playerChoice){
    result = "pareggio"

// caso vittoria o sconfitta
}else if(playerChoice < computerChoice){
    result = "sconfitta"
}else{
    result = "vittoria"
}

// mostro in pagina le scelte randomiche e il risultato
document.querySelector(".player").innerHTML = "Dado del giocatore: " + playerChoice;
document.querySelector(".computer").innerHTML = "Dado del computer: " + computerChoice;

document.querySelector(".result").innerHTML = result;