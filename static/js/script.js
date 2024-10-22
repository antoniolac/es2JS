/*
    GLOBAL
            */

//numero dei tentativi disponibile
const TENT = 5;
// Variabile che memorizza il numero random
let nRandom = generateRandomInteger();
console.log(nRandom);
  
// Variabile contatore dei tentativi
let i = 0;
let tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (TENT-i) + " tentativi";

//bottone
let btn = document.querySelector("#guessBtn");
// Evento al click del bottone
btn.addEventListener("click", handleClick);


/* 
  FUNZIONI E PROCEDURE
                      */

// Funzione che genera un numero casuale
function generateRandomInteger(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
// Funzione per il sanitize dell'input
function sanitize(stringa) {
  return parseInt(stringa.trim());
}


//funzione che gestisce l'evento click del bottone
function handleClick(event) {
  //sanitize input
  let guess = sanitize(document.querySelector("#guess").value); 
  console.log(guess);

  //gestione dei tentativi e controllo del valore di input rispetto al numero random
  let help; //variabile per gli indizi
  let tentativi;// variabile per i tentativi rimanenti

  //background-color in base al numero dei tentativi
  let element = document.querySelector("#Bg");

  let win = document.querySelector("#win")//messaggio di output in un h5
  //controlli
  
  if (guess === nRandom)  { // Win condition
    help = document.querySelector("#win").innerHTML = "Bravo hai vinto!"
    i++
    tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (TENT-i) + " tentativi";
    win = document.querySelector("#help").innerHTML = "hai impiegato " + i + " tentativi"

    //se si vince, dopo 5sec si aggiorna la pagina per rigiocare
    setTimeout(() => {
      location.reload();
    }, 5000);
    //disabilitazione del bottone
    btn.disabled = true;
    return;    
  }
  else if (guess > nRandom) { 
    help = document.querySelector("#help").innerHTML = "Troppo grande"
    
  }
  else if (guess < nRandom) {
    help = document.querySelector("#help").innerHTML = "Troppo piccolo"
  }
  
  //tentativi rimanenti
  i++
  tentativi = document.querySelector("#tentativi").innerHTML = "Hai ancora " + (TENT-i) + " tentativi";
 
  //background-color in base al numero dei tentativi
  if(i === 2){
    element.classList.remove("hero-green");
    element.classList.add("hero-yellow");

    btn.classList.remove("b-green");
    btn.classList.add("b-yellow");
  }
  else if (i === TENT){
    element.classList.remove("hero-yellow");
    element.classList.add("hero-red");

    btn.classList.remove("b-yellow");
    btn.classList.add("b-red");

    help = document.querySelector("#help").innerHTML = "Hai perso, il numero era " + nRandom
    //se si perde, dopo 5sec si aggiorna la pagina per rigiocare
    setTimeout(() => {
      location.reload();
    }, 5000); 
    //disabilitazione del bottone
    btn.disabled = true
  }
}







