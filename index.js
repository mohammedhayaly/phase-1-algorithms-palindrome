function isPalindrome(word) {
  // Convert the word to lowercase to ignore case sensitivity
  const lowerWord = word.toLowerCase();
  // Reverse the word using the split, reverse, and join methods
  const reversedWord = lowerWord.split('').reverse().join('');
  // Check if the reversed word is equal to the original word
  return lowerWord === reversedWord;
}

/* 
  Pseudocode:
  1. Convert the word to lowercase to ignore case sensitivity.
  2. Reverse the word.
  3. Check if the reversed word is equal to the original word.
  4. Return true if it is a palindrome, otherwise, return false.

  Written Explanation:
  The function takes a word as input and converts it to lowercase to ignore case sensitivity. It then reverses the word using the split, reverse, and join methods. Finally, it checks if the reversed word is equal to the original word. If the reversed word is the same as the original word, it means the word is a palindrome, so the function returns true. Otherwise, it returns false.

  The function works for lowercase strings that are all letters and ignores spaces or special characters.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;