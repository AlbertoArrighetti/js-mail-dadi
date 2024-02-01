// array con email che possono accedere
const mails = ["mario.rossi@gmail.com", 
                "elia.barbieri@gmail.com", 
                "vincenzo.montanari@gmail.com", 
                "filippo.russo@gmail.com", 
                "luca.rossi@gmail.com"]

// console.log(mails);

// salvo il bottone
const btnElement = document.getElementById("btn");
// creo funzione per il click
btnElement.addEventListener("click",
    function() {

        // contenuto inserito dall'utente
        const emailElement = document.getElementById("email").value;
        console.log(emailElement);
        
        // creo una flag per verificare se l'email è corretta 
        let flag = false;

        // creo un ciclo per l'array
        for (let i = 0; i < mails.length; i++) {
            
            // verifico se la value di emailElement è all'interno dell'array
            if (emailElement == mails[i]){
                // se la email è corretta
                flag = true;
                
                // a schermo :
                document.getElementById("result").innerText = 
                "Accesso eseguito."

            } else if (flag == false) {
                
                // se la email non è corretta 
                // a schermo : 
                document.getElementById("result").innerText = 
                "Accesso rifiutato."
            }

        }
    }
)