// Función para quitar tildes y caracteres especiales
const quitarTildes = (texto) => {
return texto
.normalize('NFD') // Descompone caracteres acentuados
.replace(/\p{Diacritic}/gu, ''); // Quita las marcas diacríticas
};
// Ejemplo de uso
const textoOriginal = "José María Azñar";
const textoNormalizado = quitarTildes(textoOriginal);
console.log(textoOriginal); // "José María Azñar"
console.log(textoNormalizado); // "Jose Maria Aznar"