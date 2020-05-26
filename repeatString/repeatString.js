const repeatString = function(words, times) {
    let phrase = '';
    if (times < 0) {return 'ERROR'}
    else {
    for (let i = 0; i < times; i++) {
    (phrase = phrase + words);}
    return phrase;}
    };
module.exports = repeatString
