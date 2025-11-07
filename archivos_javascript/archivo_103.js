const formulario = document.getElementById('registro');
const email = document.getElementById('email');
const password = document.getElementById('password');
// Validaciones individuales
function validarEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
function validarPassword(password) {
return password.length >= 8 &&
/[A-Z]/.test(password) &&
/[0-9]/.test(password);
}
// Mostrar errores
function mostrarError(campo, mensaje) {
let errorDiv = campo.parentNode.querySelector('.error');
if (!errorDiv) {
errorDiv = document.createElement('div');
errorDiv.className = 'error';
campo.parentNode.appendChild(errorDiv);
}
errorDiv.textContent = mensaje;
campo.style.borderColor = '#f44336';
}
// Limpiar errores
function limpiarError(campo) {
const errorDiv = campo.parentNode.querySelector('.error');
if (errorDiv) errorDiv.remove();
campo.style.borderColor = '#4CAF50';
}
// Validación en tiempo real
email.addEventListener('blur', () => {
if (!validarEmail(email.value)) {
mostrarError(email, 'Email debe contener @ y un dominio válido');
} else {
limpiarError(email);
}
});
password.addEventListener('blur', () => {
if (!validarPassword(password.value)) {
mostrarError(password, 'Password debe tener 8+ caracteres, una mayúscula y un número');
} else {
limpiarError(password);
}
});
// Validación al enviar
formulario.addEventListener('submit', (event) => {
event.preventDefault();
const emailValido = validarEmail(email.value);
const passwordValido = validarPassword(password.value);
if (emailValido && passwordValido) {
console.log('Formulario válido - enviando...');
// Aquí enviarías los datos al servidor
}
});