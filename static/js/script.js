
// Funzione che genera un numero casuale
function generateRandomInteger(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Funzione per il sanitize dell'input
  function sanitize(stringa) {
    return parseInt(stringa.trim());
  }
  
  function handleClick(event) {
    guess = sanitize(document.querySelector("#guess").value); // Get the input value and sanitize it
    console.log(guess);
    if (guess > nRandom) {
      console.log("Troppo grande");
      i++;
    } else if (guess < nRandom) {
      console.log("Troppo piccolo");
      i++;
    } else { // Winning condition
      console.log("Bravo, hai vinto");
      
    }
    if (i === 5) {
      console.log("Hai perso, il numero era " + nRandom);
    }
  }
  
  // Variabile che memorizza il numero random
  let nRandom = generateRandomInteger();
  console.log(nRandom);
  
  // Variabile che tiene conto dei tentativi
  let i = 0;
  
  let btn = document.querySelector("#guessBtn");
  // Evento al click del bottone
  btn.addEventListener("click", handleClick);


