const sumAll = function(x,y) {
    if (x < 0 || y < 0 || typeof y != 'number' || typeof x != 'number') {return('ERROR')}
    if (x > y) {
	 big = x;
	 small = y;}
    else {big = y; 
	 small = x;}
    var array = [];
    let i = small;
    while (i <= big) { 
      array.push( i );
      i++;
    }
    return array.reduce(function(total, current) {return total + current});    
}

module.exports = sumAll
