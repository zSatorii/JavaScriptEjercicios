const prompt = require('prompt-sync')();
const Castro_Impuesto = 0.15;
let CastrString = prompt("Ingrese el precio:");
let Castr = Number(CastrString);
if (!isNaN(Castr)) {
let impuesto = Castr * Castro_Impuesto;
let total = Castr + impuesto;
console.log("Precio base:", Castr);
console.log("Impuesto (15%):", impuesto.toFixed(2));
console.log("Total a pagar:", total.toFixed(2));
} else {
console.log("Error: Entrada inválida");
}