const calculateScreen = document.querySelector('.calculate')
const resultScreen = document.querySelector('.result')

// Variable to store the calculation value
let calculateValue = ''

// Array of valid operators
const operators = ['%', '/', '*', '-', '+']

// Function called when a number is pressed
function tapNum(numValue) {
    console.log(`tapNum called with: ${numValue}`);

    // Prevent a decimal point from being added
    // when the calculation string is empty
    if (calculateValue == '' && numValue == '.') {
        console.log("Prevented leading decimal point.");
        return;
    }

    // Prevent consecutive decimal from
    // being added
    if (calculateValue.at(-1) == '.' && numValue == '.') {
        console.log("Prevented consecutive decimal points.");
        return;
    }

    // Add the number to the calculation screen
    addcalculateScreen(numValue)
}

// Function called when an operator is pressed
function tapOperator(operatorValue) {
    console.log(`tapOperator called with: ${operatorValue}`);

    // Do not allow an operator if the calculation is empty
    if (calculateValue == '') {
        console.log("Prevented operator at start.");
        return;
    }

    // Prevent consecutive operators from being added
    if (operators.some(operator => calculateValue.at(-1) == operator)) {
        console.log("Prevented consecutive operators.");
        return;
    }

    // If there is a previous result and it's not an error
    // Use that result as the starting value for the next calculation
    if (resultScreen.textContent != '' && resultScreen.textContent != 'Error') {
        console.log(`Using previous result: ${resultScreen.textContent}`);
        calculateValue = resultScreen.textContent
        resultScreen.textContent = ''
    }

    addcalculateScreen(operatorValue)
}

// Function called when the equals (=) button is pressed
function tapResult() {
    console.log(`tapResult called. Evaluating: ${calculateValue}`);
    try {
        resultScreen.textContent = eval(calculateValue)
        console.log(`Result: ${resultScreen.textContent}`);
    } catch (e) {
        console.log("Error in evaluation.");
        resultScreen.textContent = 'Error'
    }
}

// Function called when the clear (C) button is pressed
function tapClear() {
    console.log("tapClear called.");

    // Remove the last character from the calculation string
    console.log(`Before clear: ${calculateValue}`);
    calculateValue = calculateValue.slice(0, -1)
    console.log(`After clear: ${calculateValue}`);

    // Clear the result screen
    resultScreen.textContent = ''

    // Update the calculation screen 
    calculateScreen.textContent = calculateValue
}

// Function to add a value to the calculation screen
function addcalculateScreen(value) {
    console.log(`addcalculateScreen called with: ${value}`);

    // Append the value to the calculation string
    calculateValue += value
    console.log(`Updated calculation: ${calculateValue}`);

    // Update the calculation screen display
    calculateScreen.textContent = calculateValue
}
