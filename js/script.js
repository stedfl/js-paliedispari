const word = prompt("Scrivi una parola per controllare sia palindroma");
document.querySelector(".output-palindromico").innerText = palindromWord(word);

function palindromWord(word) {
  let revWord = "";
  for (let i = word.length-1; i >= 0; i--) {
    revWord += word[i];
  }

  if (word === revWord) {
    return `La parola ${word} è palindroma`;
  } else {
    return `La parola ${word} non è palindroma`;
  }
}


const dispPar = prompt("Scrivi pari o dispari").toLowerCase();
const userNumb = parseInt(prompt("Scegli un numero da 1 a 5"));
document.querySelector(".output-winner").innerText = gameNumber(dispPar, userNumb);

function gameNumber(dispPar, userNumb) {
  const pcNumb = Math.ceil(Math.random() * 5);
  console.log("Il tuo numero è " + userNumb);
  console.log("Il numero del pc è " + pcNumb);
  const sum = userNumb + pcNumb;
  console.log("la somma è " + sum);
  console.log("Avevi scelto " + dispPar);
  if ((sum % 2) && (dispPar === "dispari") || !(sum % 2) && (dispPar === "pari")) {
    return "Hai vinto";
  } else {
    return "Hai perso, ha vinto il computer";
  }
}