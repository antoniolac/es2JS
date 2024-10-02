//funzione che genere un numero casuale
function generateRandomInteger(min = 1, max = 100){
    return Math.floor(Math.random() * (max - min + 1) + min) ;
}

//funzione per il sanitize dell'input
function sanitize(stringa) {
    return parseInt(stringa.trim());
}

//variabile che memorizza il numero random
let nRandom = generateRandomInteger();
console.log(nRandom);

//variabile che tiene conto dei tentativi
let i = 0; 

//variabile di input
let guess;
console.log("indovina il numero, hai 5 tentativi");
while (i < 5 && guess !== nRandom ) {

    do {
        guess = prompt("indovina il numero")
    } while (guess === null || guess.trim() === "" || isNaN(guess));
    guess = sanitize(guess);
    console.log(guess);
    if (guess > nRandom)
        console.log("Troppo grande");
    else if (guess < nRandom)
        console.log("Troppo piccolo");
    i++;
}

if (guess === nRandom) 
    console.log("Bravo, hai vinto");
else if (i === 5)
    console.log("Hai perso, il numero era " + nRandom);


