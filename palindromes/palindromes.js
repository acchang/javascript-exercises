
const palindromes = function(string) {
    var noSpaces = string.replace(/\s/g, '');
    var noPunctuation = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var assembledPhrase = noPunctuation.toLowerCase();
    var array = assembledPhrase.split("");
    var reversedArray = array.reverse();
    var assembledReverse = reversedArray.join("");
    return (assembledReverse == assembledPhrase)
}   

// function paly(string) {
//     var noSpaces = string.replace(/\s/g, '');
//     var noPunctuation = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//     var assembledPhrase = noPunctuation.toLowerCase();
//     var array = assembledPhrase.split("");
//     var reversedArray = array.reverse();
//     var assembledReverse = reversedArray.join("");
//     console.log(assembledReverse)
//     console.log(assembledPhrase)
// }
// paly("Animal loots foliated detail of stool lamina.")


// if the new string equals the old string then true

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 // reverseString("hello");

// official solution:
// string = "This is a test!"
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };
// console.log(palindromes)
// [^a-zA-Z] means any character that IS NOT a-z OR A-Z


module.exports = palindromes
