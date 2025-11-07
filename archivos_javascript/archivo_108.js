// ===== MÉTODO 1: toSorted() - ES2023 (Más Moderno) =====
const numeros = [64, 34, 25, 12, 22, 11, 90];
// Ordenamiento ascendente
const numerosAscendente = numeros.toSorted((a, b) => a - b);
console.log('Original:', numeros); // [64, 34, 25, 12, 22, 11, 90]
console.log('Ascendente:', numerosAscendente); // [11, 12, 22, 25, 34, 64, 90]
// ===== MÉTODO 2: Spread + sort() =====
const numerosDescendente = [...numeros].sort((a, b) => b - a);
console.log('Descendente:', numerosDescendente); // [90, 64, 34, 25, 22, 12, 11]
// ===== ORDENAMIENTO DE OBJETOS =====
const estudiantes = [
{ nombre: 'Ana', edad: 23, promedio: 8.5 },
{ nombre: 'Carlos', edad: 21, promedio: 9.2 },
{ nombre: 'María', edad: 22, promedio: 7.8 }
];
// Por edad (ascendente)
const porEdad = [...estudiantes].sort((a, b) => a.edad - b.edad);
// Por promedio (descendente)
const porPromedio = [...estudiantes].sort((a, b) => b.promedio - a.promedio);
// Por nombre (alfabético)
const porNombre = [...estudiantes].sort((a, b) => a.nombre.localeCompare(b.nombre));