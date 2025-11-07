// Método 1: Usando Set con spread operator
function eliminarDuplicados1(array) {
return [...new Set(array)];
}
// Método 2: Usando Set con Array.from()
function eliminarDuplicados2(array) {
return Array.from(new Set(array));
}
// Método 3: Para objetos (por propiedad específica)
function eliminarDuplicadosObjetos(array, propiedad) {
const vistos = new Set();
return array.filter(item => {
const valor = item[propiedad];
if (vistos.has(valor)) {
return false;
}
vistos.add(valor);
return true;
});
}
// Ejemplos de uso
const numeros = [1, 2, 2, 3, 4, 4, 5];
const nombres = ['Ana', 'Juan', 'Ana', 'María', 'Juan'];
const usuarios = [
{ id: 1, nombre: 'Ana' },
{ id: 2, nombre: 'Juan' },
{ id: 1, nombre: 'Ana' }, // Duplicado por id
{ id: 3, nombre: 'María' }
];
console.log(eliminarDuplicados1(numeros)); // [1, 2, 3, 4, 5]
console.log(eliminarDuplicados2(nombres)); // ['Ana', 'Juan', 'María']
console.log(eliminarDuplicadosObjetos(usuarios, 'id')); // Sin duplicados por id