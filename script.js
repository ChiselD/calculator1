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
	// convert number strings to actual numbers
}

function validateInput(arr) {
	let validInput = [];
	for (let i = 0, len = input.length; i < len; i++) {
		if (input[i] === '-') { validInput.push(input[i]); }
		if (isOperator(input[i]) && i > 0) { validInput.push(input[i]); }
		if (isOperator(input[i]) && isOperator(input[i+1])) {

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


// calculate(['2', '5', '-', '5', '=']);



// =========================================================