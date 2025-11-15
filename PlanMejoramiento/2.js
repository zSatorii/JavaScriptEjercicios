const prompt = require('prompt-sync')();
let Johan1 = prompt("Ingrese primer valor:");
let Castro2 = prompt("Ingrese segundo valor:");
let n1 = parseInt(Johan1, 10);
let n2 = parseInt(Castro2, 10);
if (isNaN(n1) || isNaN(n2)) {
alert("Por favor ingrese números válidos");
} else {
let resultado = n1 + n2;
alert(`El resultado de ${n1} + ${n2} = ${resultado}`);
}

