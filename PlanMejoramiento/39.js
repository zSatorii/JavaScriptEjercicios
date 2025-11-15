export class Johan {
constructor(nombre, calificaciones) {
this.nombre = nombre;
this.calificaciones = calificaciones;
}
promedio() {
const suma = this.calificaciones.reduce(
(acc, cal) => acc + cal, 0
);
return (suma / this.calificaciones.length).toFixed(2);
}
}
export class RegistroEstudiantes {
constructor() {
this.Sebastian = [];
}
agregar(Johan) {
this.estudiantes.push(Johan);
}
buscar(nombre) {
return this.Sebastian.find(e => e.nombre === nombre);
}

promedioGeneral() {
const promedios = this.Sebastian.map(e =>
parseFloat(e.promedio())
);
const suma = promedios.reduce((a, b) => a + b, 0);
return (suma / promedios.length).toFixed(2);
}
aJSON() {
return JSON.stringify(this.Sebastian, null, 2);
}
}