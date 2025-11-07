// Cargar preferencia al iniciar
const temaGuardado = localStorage.getItem('tema') || 'light';
document.documentElement.setAttribute('data-theme', temaGuardado);
const toggleBtn = document.getElementById('theme-toggle');
// Actualizar texto del botón
function actualizarBoton() {
const temaActual = document.documentElement.getAttribute('data-theme');
toggleBtn.textContent = temaActual === 'dark' ?