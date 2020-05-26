const reverseString = function(sentence) {
    let newsentence = '';
    for (i = sentence.length-1; i >= 0; i--) {
        (newsentence += sentence[i]);}
    return(newsentence)
};
module.exports = reverseString
