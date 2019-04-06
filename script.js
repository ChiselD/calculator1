const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'C'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];
const endKeys = ['=', 'C'];

// "Operators" are +, -, *, and /
// "End keys" are = and C
// "Numbers" are numbers 0 through 9
// Numbers longer than 8 digits trigger the tooBig() function.
// Any number that starts with zeroes has those zeroes cut off.
// When C is pressed, it triggers the clear() function.
// When = is pressed, it triggers the evaluate() function.
// If input starts with +, *, /, or =, those chars will be ignored.
// If input starts with -, the first number will be a negative number.
// If two operators appear in a row, only the second one counts.

function calculate(arr) {
	// validate input
	let calculation = validateInput(arr);
	// combine individual digit characters into full number strings
	// strip extra zeroes from start of each number if necessary
	// convert number strings to actual numbers
	console.log(calculation);
}

function validateInput(arr) {
	let validInput = [];
	for (let i = 0, len = arr.length; i < len; i++) {
		// check operator validity (put in separate function?)
		if (i === 0 && arr[i] === '-' && !isOperator(arr[i+1])) {
			console.log("Valid initial minus! Pushing to array...");
			validInput.push(arr[i]);
		} else if (i > 0 && isOperator(arr[i]) && !isOperator(arr[i+1])) {
			console.log("Valid operator! Pushing to array...");
			validInput.push(arr[i]);
		}
		// check number validity (all valid unless over 8 digits or starting w/ 0)
		// TO DO: over-8-digit checking should take place in UI directly at entry!
		// move commented-out code below to there when the time comes
		// TO DO: numbers starting with zero should be removed from arr afterward
		if (isNumber(arr[i])) {
			console.log("Valid number! Pushing to array...");
			validInput.push(arr[i]);
			// let numLength = 1;
			// for (let j = i-1; j >= 0; j--) {
			// 	if (isNumber(arr[j])) {
			// 		numLength++;
			// 	}
			// }
			// if (numLength < 9) {
				
			// }
		}
	}
	return validInput;
}

function isNumber(s) {
	return numbers.indexOf(s) !== -1;
}

function isOperator(s) {
	return operators.indexOf(s) !== -1;
}

function isEndKey(s) {
	return endKeys.indexOf(s) !== -1;
}

function zeroStripper(str) {
	let num = Array.from(str);
	while (num[0] === '0') {
		num.splice(0, 1);
	}
	return num;
}


// calculate(['2', '5', '-', '5', '=']);
// calculate(['0', '2', '5', '-', '5', '=']);
// calculate(['+', '2', '5', '-', '5', '=']);
// calculate(['-', '2', '5', '-', '5', '=']);
// calculate(['*', '2', '5', '-', '5', '=']);
// calculate(['/', '2', '5', '-', '5', '=']);
// calculate(['2', '5', '-', '+', '5', '=']);
// calculate(['2', '5', '-', '+', '/', '5', '=']);
zeroStripper('00056');



// =========================================================