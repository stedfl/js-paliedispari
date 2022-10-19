const word = "ella";
const wordArray = [];
  for (let i = 0; i < word.length; i++) {
    wordArray.push(word[i]);
  }
console.log(wordArray);
const revWordArray = wordArray.reverse();
console.log(revWordArray);
  let isPalindroma = false;
  for (let c = 0; c < wordArray.length; c++) {
    console.log("Word: " + wordArray[c]);
    console.log("reverse: " + revWordArray[c]);
    if (wordArray[c] === revWordArray[c]) {
      isPalindroma = true;
    }
    else {
      (isPalindroma = false);
      c = wordArray.length;
    }
  }

  console.log(isPalindroma);
  if (isPalindroma === true) {
    console.log("La parola è palindroma")
  } else {
    console.log("La parola non è palindroma")
  }