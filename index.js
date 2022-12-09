function reverseString(word) {

  // splitting the word into an array
  const wordArray = word.split("");

  // reversing the word array
  const reversedWordArray = wordArray.reverse();

  // Joining the reversed word in an array
  const reversedWord = reversedWordArray.join("");

  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {

  // reverse the input string
  const reversedWord = reverseString(word);
  
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
