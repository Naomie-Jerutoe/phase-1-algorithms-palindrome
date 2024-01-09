//function to check if a word is palindrom
function isPalindrome(word) {
  // Write your algorithm here
  //convert the word to lowercase 
  const lowRegWord = word.toLowerCase();
  //revese the characters of a word
  const reverseWord = lowRegWord.split('').reverse().join('');
  //check if the reversed word is equal to the original word
  return reverseWord === lowRegWord;
}

/* 
  Add your pseudocode here
  function isPalindrome(word)
  -Convert the input word to lowercase and stores it in a variable lowRegword.
  -Reverse the characters of a word and store the result in variable reverseWord.
  -Return true if reverseWord is equal to lowRegWord, indicating the word is a palindrome.
  -Return false if otherwise.
*/

/*
  Add written explanation of your solution here
  The function isPalindrome checks if a given word is palindrome.
  It does this by converting the word to lowercase, reversing the characters of the word and 
  checking if the reversed word is equal to the original word. 
  It returns true if they are equal indicating the word is palindrome and returns false if otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome('madam'));

  console.log("Expecting: false")
  console.log("=>", isPalindrome('blade'))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
