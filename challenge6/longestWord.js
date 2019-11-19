function longestWord(str) {
  let words = str.split(" ");

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      // console.log(longestWord);
    }
  }

  return longestWord;
}

console.log(longestWord("I am so hungry my dude"));
console.log(longestWord("I love the lord of the rings"));
