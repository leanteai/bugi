// Helper function to calculate the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  // Helper function to check if a string is palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to generate a random integer within a specified range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage of the helper functions
  console.log(factorial(5)); // Output: 120
  console.log(isPalindrome("racecar")); // Output: true
  console.log(getRandomInt(1, 10)); // Output: Random integer between 1 and 10
  