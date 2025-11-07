if (operador === '+') {
    resultado = num1 + num2;
} else if (operador === '-') {
    resultado = num1 - num2; 
} else if (operador === '*') {
    resultado = num1 * num2; 
} else if (operador === '/') {

    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Error: División por cero";
    }
} else {
    resultado = "Operador inválido";
}
