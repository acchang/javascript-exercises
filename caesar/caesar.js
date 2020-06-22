const caesar = function(string,shift) {
    splitString = string.split("");
    remappedString = splitString.map(function(char) 
        {return convert(char, shift); });
// this calls an unnamed function on the char of splitString 
// for mapping, but returns the results of convert, which
// uses two parameters.
// it's the same thing as
// remappedString = 
// splitString.map((character) => convert(character, shift));
    return remappedString.join("");
}

function convert(char, shift) {
    const code = char.charCodeAt();
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
    };

  // Made error in function mod(n, m) {(n % m + m) % m};
  // should be: const mod = (n, m) => (n % m + m) % m;
  // OR, returns implied in arrow 
  // but needs to be explicit in normal functions:

  function mod(n,m) {return ((n % m + m) % m)}
  
  const codeSet = function (code) {
      if (code < 97) {return 65}
      else return 97}; 

caesar("hello", 2)



// discord link:
// https://discord.com/channels/505093832157691914/513125308757442562/724062998712549416

// the different kinds of functions
// https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript


// official solution:
// Here I understand
// const caesar = function(string, shift) {
//     return string
//       .split("")
//       .map(char => shiftChar(char, shift))
//       .join("");
//   };
// // you would invole this with caesar("hello", 5)

//   const codeSet = code => (code < 97 ? 65 : 97);

// this means constant Codeset is 
// if code is less than 97, return 65, otherwise return 97
// here is unicode map: https://en.wikipedia.org/wiki/List_of_Unicode_characters
// letters run 65 to 90

// // this is how the string is shifted
//   const mod = (n, m) => (n % m + m) % m;
// // m represents the 26 letters in the alphabet
// // number modulo 26 gets you the original number
// // add 26, divided by 26 in case it's negative
// // gets you back to the original number
// // because n % m gets you the negative up to 26
// // add 26 to return to positive scale
// // modulo once more in case it's 0 or 27.
// // 27 % 26 = 1 + 26 = 27 so need to % 26 once more.

//   This is where the string is shifted:
//   const shiftChar = (char, shift) => {

//     const code = char.charCodeAt();
//     // this gets the Unicode

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//      // essentially, if the unicode is a letter (capital OR lowercase)

// // below here is the last part to understanding -- 
//       return String.fromCharCode(
// // this converts from unicode -- but why string?    
//         mod(code + shift - codeSet(code), 26) + codeSet(code)
// // for function mod, n is the code + shift, m is 26)
// // but why subtract the codeSet(code), which is 65 or 97 and then add it?
// // because if the letter is 90 ("Z"), and shift by 1 you get 91, then subtract 65, it's 26.
// // run the mod function on 26 gets you 0, which isn't a unicode value, but if you add 65, it is.
// // adding or subtracting 65 or 97 put it back in the range of the looped 26.
// // but why subtract then add, not add then subtract?
// // because the mod function will always mean it will between 1 and 26, 
// // so if you subtract later, the unicode won't work
// // you subtract first to put it in the range of the relevant unicode.
// // if A is 65 and you want +1 to B, you bring 65 down to 1, add 1, then run the mod
// // got it! -- this was hard to understand.
//       );
//     }
//     return char;
//   };
  
  module.exports = caesar;


