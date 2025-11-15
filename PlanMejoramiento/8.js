// ejercicio08.js
let Castro = ["El Quijote", "100 Años de Soledad", "Fahrenheit 451"];

console.log("Libros iniciales:", Castro.length);
Castro.push("Moby Dick");
console.log("Después de push:", Castro.length);
console.log("Libros:", Castro);
let Gonzalez = Castro.pop();
console.log("Libro removido:", Gonzalez);
console.log("Libros finales:", Castro.length);