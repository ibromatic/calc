// Get reference to the display
const display = document.getElementById('display');

// Append a number or operator to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Evaluate and display the result
function calculateResult() {
  try {
    // Use eval to compute the result
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    // If there's an error in the expression
    display.value = 'Error';
  }
}
