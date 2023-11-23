// Variable que almacena la entrada actual que se muestra en la pantalla
let currentInput = '';

// Agrega un número a la entrada actual y actualiza la pantalla
function agregarnumero(numero) {
    currentInput += numero;
    updateDisplay();
}

// Agrega un operador a la entrada actual y actualiza la pantalla
function agregaroperador(operador) {
    currentInput += ` ${operador} `;
    updateDisplay();
}

// Intenta calcular el resultado de la expresión en la entrada actual y actualiza la pantalla
function calcular() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        // Si hay un error durante la evaluación, muestra 'Error' en la pantalla
        currentInput = 'Error';
        updateDisplay();
    }
}

// Actualiza el valor del elemento en la pantalla con la entrada actual
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Borra el último carácter de la entrada actual y actualiza la pantalla
function borrarUltimoCaracter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Borra completamente la entrada actual y actualiza la pantalla
function borrarTodo() {
    currentInput = '';
    updateDisplay();
}
