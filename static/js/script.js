
// Funzione che genera un numero casuale
function generateRandomInteger(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Funzione per il sanitize dell'input
  function sanitize(stringa) {
    return parseInt(stringa.trim());
  }
  
  function handleClick(event) {
    guess = sanitize(document.querySelector("#guess").value); 
    console.log(guess);
    
    let help;
    let tentativi;
    if (guess > nRandom) {
      help = document.querySelector("#help").innerHTML = "Troppo grande"
      i++;
      tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
    } else if (guess < nRandom) {
      help = document.querySelector("#help").innerHTML = "Troppo piccolo"
      i++;
      tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
    } else { // Win condition
      help = document.querySelector("#help").innerHTML = "Bravo hai vinto!"
      i++;
      tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
      let win = document.querySelector("#win").innerHTML = "hai impiegato " + i + " tentativi"      
    }
    if (i === 5) {
      help = document.querySelector("#help").innerHTML = "Hai perso, il numero era " + nRandom
    }
  }
  
  // Variabile che memorizza il numero random
  let nRandom = generateRandomInteger();
  console.log(nRandom);
  
  // Variabile che tiene conto dei tentativi
  let i = 0;
  tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
  
  let btn = document.querySelector("#guessBtn");
  // Evento al click del bottone
  btn.addEventListener("click", handleClick);


