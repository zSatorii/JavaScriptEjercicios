// ===== CREAR UNA PROMISE BÁSICA =====
function esperar(milisegundos) {
return new Promise((resolve, reject) => {
if (milisegundos < 0) {
reject(new Error('El tiempo no puede ser negativo'));
} else {
setTimeout(() => {
resolve(`Esperé ${milisegundos}ms`);
}, milisegundos);
}
});
}
// ===== USAR LA PROMISE CON .then() =====
esperar(2000)
.then(resultado => {
console.log(resultado); // "Esperé 2000ms"
return esperar(1000); // Encadenar otra promise
})
.then(resultado => {
console.log(resultado); // "Esperé 1000ms"
})
.catch(error => {
console.error('Error:', error.message);
});
// ===== SIMULADOR DE API =====
function obtenerUsuario(id) {
return new Promise((resolve, reject) => {
// Simular delay de red
setTimeout(() => {
const usuarios = {
1: { id: 1, nombre: 'Ana', email: 'ana@email.com' },
2: { id: 2, nombre: 'Carlos', email: 'carlos@email.com' }
};
const usuario = usuarios[id];
if (usuario) {
resolve(usuario);
} else {
reject(new Error(`Usuario ${id} no encontrado`));
}
}, 1500);
});
}
