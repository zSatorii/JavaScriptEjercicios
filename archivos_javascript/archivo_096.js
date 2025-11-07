// Variable global para el contador
let n = 0;
// Referencia al elemento que muestra el valor
const c = document.getElementById('count');
// Función para actualizar la pantalla
const paint = () => (c.textContent = n);
// Event listeners para cada botón
document.getElementById('mas').onclick = () => {
n++; // Incrementar
paint(); // Actualizar pantalla
};
document.getElementById('menos').onclick = () => {
n--; // Decrementar
paint(); // Actualizar pantalla
};
document.getElementById('reset').onclick = () => {
n = 0; // Reiniciar
paint(); // Actualizar pantalla
};