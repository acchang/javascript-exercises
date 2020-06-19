function add (x,y) {
	return (x + y);
}

function subtract (x,y) {
	return(x - y)
	
}

// provided solution:
// https://discord.com/channels/505093832157691914/513125308757442562/723329381438587010
// function sum(array) {
// 	return array.reduce((total, current) => total + current, 0);
// 	}
// OR


function sum(array) {
	let sum = 0;
	let n =  array.length;
	while(n--) {
	  sum += array[n];
	}
	return sum;
  };

//  function sum(array) {
// 	return (array.reduce(myFunc);
// 	function myFunc(total, current) {
// 		return total + current +  0;}};
// lacks zero, can't do it this way

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

function multiply(array) {
	let product = 1;
	let n =  array.length;
	while(n--) {
	  product *= array[n];
	}
	return product;
  };

function power(x,y) {
	return (Math.pow(x, y));
}

function factorial(number) {
	if (number == 0) return 1;
	let array = [number]
	while (number >1 ) {
		number -= 1;
		array.push(number)
}
	let n =  array.length;
	let product = 1;
	while(n--) {
		product *= array[n];
}
	return product;}

// why is it failing the 0 test in jasmine and then passing? 
// answer: bad identing
// why doesn't `if number == 0 {return 1};` work -- why does (number == 0) have to be in parentheses?
// answer: you need to separate block with parenthesis

// official solution:
// function factorial(n) {
// 	if (n == 0) return 1;
// 	let product = 1;
// 	for (let i = n; i > 0; i--) {
// 	  product *= i;
// 	}
// 	return product;

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}