let findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
// how does this work? 
// a reduce function takes an accumulator and current value as arguments
// and performs an operation that ends up with all in the accumulator

// what of an object literal?
// this helps: https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects

// so it establishes "oldest"(first value) as the accumulator, computes age
// then takes currentPerson (second value)

      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
// how does oldestAge/currentAge know 
// to operate on a single part of the object?

      return oldestAge < currentAge ? currentPerson : oldest
//     if oldestAge is less than curent age, 
//     return current person (as the accumulator), otherwise return oldest
//     then move on to next current value and run it
    })
  };
// how does computer know whether to stop or move on?
// if sequence is 1, 3, 10 -- 1 is accum, then 3, then 10
// if it's 10, 3, 11 -- 10 is, not 3, then 11
// if it's 17, 11, 5 -- 17 is, 17 is, 17 is
// ok, this makes sense to me.
// if accumulator is the superlative, 
// take each and weigh against or add to, and keep or replace


  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
// this above was trickiest -- how to insert unmentioned info
    }
    return death - birth;
  }

var people = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
    yearOfDeath: 2011
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941
  },
];

findTheOldest(people)

module.exports = findTheOldest


//
// psuedocode: Use map function like previous?
//     return array.map(people => ([yearOfDeath] - [yearOfBirth]))
// var getTheTitles = function(array) {
//     return array.map(book => book.title)
//   }

//


// given an array of objects, return the oldest person.

// - You should return the whole person object, 
// but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, 
// or by using `reduce`. ** I DON'T KNOW HOW REDUCE IS USEFUL
// - One of the tests checks for people with no death-date.
//  use JavaScript's Date function to get their age as of today.
// - finds the oldest person if the OLDEST is still living
// - finds the oldest person if someone is still living

// My attempt:
// tried to get map to return two key value pairs but I will abandon:
// let findTheOldest = function(array) {
//     return array.map(people => 
//         {return {lifespan: ([people.yearOfDeath] - [people.yearOfBirth])}}
// //        ((people.name)+([people.yearOfDeath] - [people.yearOfBirth]))
// //     )};

// Other solutions:

// const getAge = ({ yearOfBirth, yearOfDeath }) => yearOfDeath - yearOfBirth;
// const findTheOldest = function(people) {
//   let accumAge = getAge(people[0]);
//   return people.reduce((accum, curr) => {
//     const currAge = getAge(curr);
//     if (currAge > accumAge) {
//       accumAge = currAge;
//       return curr;
//     }
//     return accum;
//   });
// }

// // OR

// findTheOldest(people)
// {name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011}
// const res = people.reduce((prevVal,curVal) => {
//       return prevVal.yearOfDeath-prevVal.yearOfBirth < curVal.yearOfDeath-curVal.yearOfBirth ? curVal: prevVal;
//     })
//     console.log(res.name,res.yearOfDeath-res.yearOfBirth);
// VM245:4 Ray 49
// undefined
//  const oldestPeople = people.sort(function(a,b) {
//   const lastPerson = a.yearOfDeath - a.yearOfBirth;
//   const nextPerson = b.yearOfDeath - b.yearOfBirth;
//   if (lastPerson > nextPerson) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// // FROM:

// https://stackoverflow.com/questions/61151316/how-to-find-the-oldest-person-in-people-array-using-javascript


