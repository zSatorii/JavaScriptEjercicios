// app.js
import fs from 'fs';
import { Estudiante, RegistroEstudiantes } from './41.js';
const registro = new RegistroEstudiantes();
registro.agregar(new Estudiante("Ana", [85, 90, 88]));
registro.agregar(new Estudiante("Carlos", [78, 82, 80]));
registro.agregar(new Estudiante("María", [92, 95, 91]));
console.log("Promedio general del curso:",
registro.promedioGeneral());
fs.writeFile(
'estudiantes.json',
registro.aJSON(),
(err) => {
if (err) {
console.error("Error al guardar:", err);
return;
}
console.log("Datos guardados exitosamente en estudiantes.json");
}
);
fs.readFile('estudiantes.json', 'utf8', (err, data) => {
if (err) {
console.log("Archivo no existe aún");
return;
}
const datosEstudiantes = JSON.parse(data);
console.log("\nDatos cargados desde archivo:");
console.log(datosEstudiantes);
});