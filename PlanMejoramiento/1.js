const prompt = require('prompt-sync')(); //la libreria que se requiere para el prompt
let Castro1 = prompt("Ingrese el primer número:");
let Castro2 = prompt("Ingrese el segundo número:");
let num1 = parseInt(Castro1);
let num2 = parseInt(Castro2);
let suma = num1 + num2;
alert("La suma es: " + suma);

//Es una suma, el alert no funciona porque requiere de un cliente, y en node se usa console.log