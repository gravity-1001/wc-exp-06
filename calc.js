/**
 * Command-Line Calculator Program
 * * To run this program, use the following format in your terminal:
 * node calculator.js <number1> <operator> <number2>
 * * Example: node calculator.js 10 + 5
 * Supported operators: +, -, x (for multiply), /
 */

// Read arguments from the command line.
// process.argv[0] is 'node'
// process.argv[1] is 'calculator.js'
// Arguments start from index 2
const args = process.argv.slice(2);

// --- 1. Validate the number of arguments ---
if (args.length !== 3) {
    console.log("Error: Incorrect number of arguments.");
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    console.log("Supported operators: +, -, x, /");
    // Exit the program
    process.exit(1);
}

const num1Str = args[0];
const operator = args[1];
const num2Str = args[2];

// --- 2. Parse numbers and validate type ---
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
    console.log(`Error: Both operands must be valid numbers. Received '${num1Str}' and '${num2Str}'.`);
    process.exit(1);
}

let result;

// --- 3. Perform calculation based on the operator ---
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case 'x':
    case '*': // Allow both 'x' and '*' for multiplication
        result = num1 * num2;
        break;
    case '/':
        // Handle division by zero error
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log(`Error: Invalid operator '${operator}'. Supported operators are: +, -, x, /`);
        process.exit(1);
}

// --- 4. Output the result ---
console.log(`Calculation: ${num1} ${operator} ${num2}`);
console.log(`Result: ${result}`);
