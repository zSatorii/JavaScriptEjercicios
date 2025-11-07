// ===== REDUCE: Sumar todos los números =====
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log('Suma:', suma); // 15
// ===== REDUCE: Encontrar el máximo =====
const maximo = numeros.reduce((max, actual) => actual > max ? actual : max);
console.log('Máximo:', maximo); // 5
// ===== REDUCE: Contar ocurrencias =====
const frutas = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'manzana'];
const conteo = frutas.reduce((contador, fruta) => {
contador[fruta] = (contador[fruta] || 0) + 1;
return contador;
}, {});
console.log('Conteo:', conteo); // {manzana: 3, banana: 2, naranja: 1}
// ===== FLATMAP: Aplanar y transformar =====
const frases = ['hola mundo', 'javascript es genial', 'programar es divertido'];
const palabras = frases.flatMap(frase => frase.split(' '));
console.log('Palabras:', palabras); // ['hola', 'mundo', 'javascript', 'es', 'genial', ...]
// ===== FLATMAP: Procesar arrays anidados =====
const usuarios = [
{ nombre: 'Ana', hobbies: ['leer', 'nadar'] },
{ nombre: 'Carlos', hobbies: ['correr', 'cocinar', 'leer'] }
];
const todosLosHobbies = usuarios.flatMap(usuario => usuario.hobbies);
console.log('Todos los hobbies:', todosLosHobbies);