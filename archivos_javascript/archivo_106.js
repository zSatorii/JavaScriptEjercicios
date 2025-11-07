function contarPalabras(texto) {
// Limpiar y normalizar el texto
const textoLimpio = texto
.toLowerCase() // A minúsculas
.replace(/[^\w\sáéíóúñü]/g, '') // Solo letras, números, espacios y acentos
.trim(); // Quitar espacios extremos
// Dividir en palabras y filtrar vacías
const palabras = textoLimpio
.split(/\s+/) // Dividir por espacios
.filter(palabra => palabra.length > 0); // Filtrar strings vacíos
// Contar frecuencias usando Map
const frecuencias = new Map();
palabras.forEach(palabra => {
if (frecuencias.has(palabra)) {
frecuencias.set(palabra, frecuencias.get(palabra) + 1);
} else {
frecuencias.set(palabra, 1);
}
});
// Convertir a array y ordenar por frecuencia
return Array.from(frecuencias.entries())
.sort((a, b) => b[1] - a[1]) // Ordenar por frecuencia (mayor primero)
.map(([palabra, frecuencia]) => ({ // Convertir a objetos
palabra,
frecuencia,
porcentaje: ((frecuencia / palabras.length) * 100).toFixed(1)
}));
}
// Función para mostrar resultados
function mostrarAnalisis(texto) {
const resultados = contarPalabras(texto);
const container = document.getElementById('resultados');
container.innerHTML =