// Generare un numero random da 1 a 6, 
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// creare 2 variabili per il tiro dei dadi
// computer
const computerChoice = Math.floor(Math.random() * 6 + 1);
console.log("scelta computer", computerChoice);
// player
const playerChoice = Math.floor(Math.random() * 6 + 1);
console.log("scelta player", playerChoice);

// verificare il vincitore tramite controlli 
// caso pareggio
if (computerChoice == playerChoice){
    console.log("pareggio");

// caso vittoria o sconfitta
}else if(playerChoice < computerChoice){
    console.log("sconfitta");
}else{
    console.log("vittoria");
}

