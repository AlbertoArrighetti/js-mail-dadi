// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere 
// (qui quindi dovremmo creare da noi un array di email casuali),

// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())




// array con mail per poter accedere
const mails = ["mario.rossi@gmail.com", "elia.barbieri@gmail.com", "vincenzo.montanari@gmail.com", "filippo.russo@gmail.com", "luca.rossi@gmail.com"]
console.log(mails);

// salvo il bottone
const btnElement = document.getElementById("btn");
// creo funzione per il click
btnElement.addEventListener("click",
    function() {
        // contenuto inserito dall'utente
        const emailElement = document.getElementById("email").value;
        console.log(emailElement);
        
        // creo una flag
        let flag = false;
        // creo un ciclo per array
        for (let i = 0; i < mails.length; i++) {
            
            // verifico se la value di emailElement è all'interno dell'array
            if (emailElement == mails[i]){
                // se la email è corretta

                flag = "email corretta";
                console.log(flag);

                // se la email non è corretta 
            } else if (emailElement != mails[i]){

                flag = "no";
                console.log(flag);
            }

        }
    }
)