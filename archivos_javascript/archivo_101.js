async function copiarTexto(texto, boton) {
try {
// Intentar copiar al portapapeles
await navigator.clipboard.writeText(texto);
// Feedback visual exitoso
const textoOriginal = boton.textContent;
boton.textContent = '¡Copiado!';
boton.style.backgroundColor = '#4CAF50';
// Restaurar después de 2 segundos
setTimeout(() => {
boton.textContent = textoOriginal;
boton.style.backgroundColor = '';
}, 2000);
} catch (error) {
// Fallback si falla la API moderna
console.error('Error al copiar:', error);
// Feedback de error
boton.textContent = 'Error al copiar';
boton.style.backgroundColor = '#f44336';
setTimeout(() => {
boton.textContent = 'Copiar';
boton.style.backgroundColor = '';
}, 2000);
}
}
// Uso del evento
document.getElementById('copiar-btn').onclick = (event) => {
const textoACopiar = document.getElementById('texto-fuente').value;
copiarTexto(textoACopiar, event.target);
};