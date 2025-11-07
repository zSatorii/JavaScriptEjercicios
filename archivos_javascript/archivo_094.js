const $ = (sel) => document.querySelector(sel);
// Obtenemos referencias a los elementos HTML
const input = $('#nombre'); // El campo de texto
const out = $('#out'); // El párrafo de salida
// Agregamos el evento click al botón
$('#btn').addEventListener('click', () => {
const nombre = input.value.trim(); // Obtenemos y limpiamos el texto
// Si hay nombre, saludamos; si no, pedimos que escriban
out.textContent = nombre ? `Hola, ${nombre}!` : 'Escribe tu nombre';
});