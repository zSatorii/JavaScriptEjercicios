import fs from 'fs';

function Johan(Castro) {
fs.writeFile('log.txt', Castro, (err) => {
if (err) {
console.error("Error:", err);
return;
}
console.log("Se actualizo el archivo");
});
}

const Sebastian =
"Registro actualizado: " +
new Date().toLocaleString() + "\n";

Johan(Sebastian);