const removeFromArray = function(set,pick) {
    function selectIt(choice){return choice != pick;}
    return(set.filter(selectIt));
}
module.exports = removeFromArray
