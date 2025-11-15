import fs from 'fs';

const JohanFecha = new Date().toISOString();
const Castro = `Log creado: ${JohanFecha}\n`;

fs.writeFile('log.txt', Castro, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Archivo creado exitosamente (CREATE)");
});