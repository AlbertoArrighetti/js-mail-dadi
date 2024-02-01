// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere 
// (qui quindi dovremmo creare da noi un array di email casuali),

// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())

// array con mail per poter accedere
const mails = ["mario.rossi@gmail.com", "elia.barbieri@gmail.com", "vincenzo.montanari@gmail.com", "filippo.russo@gmail.com", "luca.rossi@gmail.com"]
console.log(mails);

// form per chiedere la mail all'utente

// salvo il bottone
const btnElement = document.getElementById("btn");
// creo funzione per il click
btnElement.addEventListener("click",
    function() {
        const emailElement = document.getElementById("email").value ;
        console.log(emailElement);
    }
)