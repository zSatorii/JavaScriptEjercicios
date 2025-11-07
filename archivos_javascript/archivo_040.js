let temperatura = parseFloat(prompt("Ingrese la temperatura:"));

let tipoConversion = prompt("¿Desea convertir a Fahrenheit (F) o Celsius (C)?").toUpperCase();

let resultadoConversion;

if (isNaN(temperatura)) {
    alert("Por favor, ingrese una temperatura válida.");
} else {
    if (tipoConversion === 'F') {
        resultadoConversion = (temperatura * 9/5) + 32;
        alert(temperatura + "°C es " + resultadoConversion.toFixed(2) + "°F.");
    }
    else if (tipoConversion === 'C') {
        resultadoConversion = (temperatura - 32) * 5/9;
        alert(temperatura + "°F es " + resultadoConversion.toFixed(2) + "°C.");
    }
    else {
        alert("Tipo de conversión inválido. Por favor, ingrese 'F' o 'C'.");
    }
}
