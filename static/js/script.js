// Variabile che memorizza il numero random
let nRandom = generateRandomInteger();
console.log(nRandom);
  
// Variabile che tiene conto dei tentativi
let i = 0;
tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
  
let btn = document.querySelector("#guessBtn");
// Evento al click del bottone
btn.addEventListener("click", handleClick);



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


    let element = document.querySelector("#Bg");
    if(i === 1){
      element.classList.remove("hero-green");
      element.classList.add("hero-yellow");

      btn.classList.remove("b-green");
      btn.classList.add("b-yellow");
    }
    else if (i == 4){
      element.classList.remove("hero-yellow");
      element.classList.add("hero-red");

      btn.classList.remove("b-yellow");
      btn.classList.add("b-red");
    }


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
      //tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (5-i) + " tentativi";
      let win = document.querySelector("#win").innerHTML = "hai impiegato " + i + " tentativi"
      setTimeout(() => {
        location.reload();
      }, 5000);
      btn.disabled = true     
    }
    if (i === 5) {
      help = document.querySelector("#help").innerHTML = "Hai perso, il numero era " + nRandom
      setTimeout(() => {
        location.reload();
      }, 5000); 
      btn.disabled = true
    }
  }







