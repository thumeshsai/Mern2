function sortStringAlphabetically(inputString) {
  // Split the string into an array of characters
  var characters = inputString.split('');
  
  // Sort the array of characters alphabetically
  characters.sort();
  
  // Join the sorted characters back into a string
  var sortedString = characters.join('');
  
  return sortedString;
}

// Example usage:
var input = 'webmaster';
var sortedOutput = sortStringAlphabetically(input);
console.log(sortedOutput); // Output: 'abeemrstw'
