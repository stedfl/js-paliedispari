const btnWord = document.getElementById("input-word");
btnWord.addEventListener("click", function() {
  const word = document.getElementById("user-word").value.toLowerCase();
  document.querySelector(".output-palindromico").innerText = palindromWord(word);
})

const btnInput = document.getElementById("input");
btnInput.addEventListener("click", function() {
  const dispPar = document.getElementById("choice").value;
  const userNumb = parseInt(document.getElementById("user-numb").value);
  if (isNaN(userNumb)) {
    alert('Inserire un numero');
  } else if (userNumb < 1 || userNumb > 5) {
    alert('Inserire un numero tra 1 e 5');
  } else {
    const pcNumb = randomNumb();
    const sum = userNumb + pcNumb;
    document.querySelector(".output-winner").innerText = gameNumber(dispPar, sum, pcNumb);
  }
});

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

function randomNumb() {
  return Math.ceil(Math.random() * 5);
}

function gameNumber(dispPar, sum, pcNumb) {
  if ((sum % 2) && (dispPar === "dispari") || !(sum % 2) && (dispPar === "pari")) {
    return `Hai vinto perché il pc ha scelto il numero ${pcNumb} e la somma è ${sum}`;
  } else {
    return `Hai perso perché il pc ha scelto il numero ${pcNumb} e la somma è ${sum}`;
  }
}