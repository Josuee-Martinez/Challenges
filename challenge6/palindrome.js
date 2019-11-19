// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.

function palindrome(str) {
  let reg = /[\W_]/g;

  let lowerCaseStr = str.toLowerCase().replace(reg, "");

  let reversed = lowerCaseStr.split("").reverse().join("");

  if(reversed === lowerCaseStr) {
    console.log('palindrome');
  } else {
    console.log('not palindrome');
  }
}

palindrome('car');