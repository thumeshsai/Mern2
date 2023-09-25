function reverseNumber(x) {
  // Convert the number to a string
  const numStr = x.toString();

  // Reverse the string
  const reversedStr = numStr.split('').reverse().join('');

  // Convert the reversed string back to a number
  const reversedNum = parseInt(reversedStr, 10);

  return reversedNum;
}

// Example usage:
const x = 32243;
const reversed = reverseNumber(x);
console.log(reversed); // Output: 34223
