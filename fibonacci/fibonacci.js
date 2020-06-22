const fibonacci = function(x) {
    if (x == 1){return 1};
    if (x == 2){return 1};
    if (x == 0){return 0};
    if (x < 0) {return "OOPS"};
    let y = x - 2;
    let array = [1, 1]
    for (i = 0; i < y; i++) {
    let z = (array[array.length - 1]) + (array[array.length - 2])
    array.push(z)
    }
    return (array[x-1])};

fibonacci(6)

module.exports = fibonacci

// The official solution is

//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;

// Proof:
// Temp = 1
// B = 0 + 1, or 1 
// A = 1

// Temp = 1
// B = 1 + 1, or 2
// A = 1

// Temp = 2
// B = 1 + 2, or 3
// A = 2

// Temp = 3
// B = 2 + 3, or 5
// A = 3

// Temp = 5
// B =. 3 + 5 or 8
// A = 5


// This is tricky -- 
// 1) So what happens is you have a temporary holding place for the value, 
// which is the last sum from previous (b = a + b), which becomes temp.
// 2) Your new last sum (B) is last (B) plus previous (A)
// 3) Your new previous (A) is the last sum (temp)


// my reasoning and psuedocode:
// Create a function that returns a specific member of the fibonacci sequence:
// > a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6) // returns 8
// 1 1 2 3 5 8

// f(x) will be the Array(x-2) + Array (x-1)
// I need code to compute fibonnacci to x
// do a for loop function that computes fibonacci
// output an array
// then pull the relevant numbers

// function fib(x) {
//     if (x == 1){return 1};
//     if (x == 2){return 1};
//     let y = x - 2;
//     let array = [1, 1]
//     for (i = 0; i < y; i++) {
//     let z = (array[array.length - 1]) + (array[array.length - 2])
//     array.push(z)
//     }
//     console.log(array);
//     console.log(array[x-1]);
//     console.log(array[array.length - 1])
//     return (array[array.length - 2]) + (array[array.length - 3])};

// fib(4);
