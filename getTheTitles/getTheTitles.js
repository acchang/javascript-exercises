const getTheTitles = function(arrayOne) {
 let arrayTwo = [];
 let howMany = arrayOne.length;
 for (i = 0; i < howMany; i++) {
 let z = (arrayOne[i].title);
    arrayTwo.push(z);
    }
return arrayTwo
}

module.exports = getTheTitles;

// (getTheTitles(books)).toEqual(['Book','Book2']);

// const books = [
//     {
//       title: 'BookA',
//       author: 'Name'
//     },
//     {
//       title: 'Book2B',
//       author: 'Name2'
//     }
//   ];

// Book solution -- much smarter:

// var getTheTitles = function(array) {
//     return array.map(book => book.title)
//   }

// getTheTitles(books)


