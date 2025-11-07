let timerInterval = null; // Variable para guardar la referencia del timer
let tiempoRestante = 0; // Tiempo en segundos
const display = document.getElementById('timer-display');
const inputTiempo = document.getElementById('tiempo-inicial');
const btnIniciar = document.getElementById('iniciar');
const btnDetener = document.getElementById('detener');
function actualizarDisplay() {
const minutos = Math.floor(tiempoRestante / 60);
const segundos = tiempoRestante % 60;
display.textContent =
`${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
btnIniciar.onclick = () => {
// Limpiar timer existente si hay uno
if (timerInterval) clearInterval(timerInterval);
tiempoRestante = parseInt(inputTiempo.value) || 60;
timerInterval = setInterval(() => {
if (tiempoRestante <= 0) {
clearInterval(timerInterval);
timerInterval = null;
alert('¡Tiempo terminado!');
return;
}
tiempoRestante--;
actualizarDisplay();
}, 1000);
actualizarDisplay();
};
btnDetener.onclick = () => {
if (timerInterval) {
clearInterval(timerInterval);
timerInterval = null;
}
};