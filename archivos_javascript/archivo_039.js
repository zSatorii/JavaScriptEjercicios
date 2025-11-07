let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad)) {
    alert("Por favor, ingrese una edad válida (número).");
} else if (edad >= 18) {
    alert("Usted es mayor de edad.");
} else {
    alert("Usted es menor de edad.");
}