const word = prompt("Scrivi una parola per controllare sia palindroma");
document.querySelector(".output").innerText = palindromWord(word);

function palindromWord(word) {
  let revWord = "";
  for (let i = word.length-1; i >= 0; i--) {
    revWord += word[i];
  }

  if (word === revWord) {
    return `La parola ${word} è palindroma`
  } else {
    return `La parola ${word} non è palindroma`
  }
}