// ===== FUNCIÓN ASYNC BÁSICA =====
async function saludarAsync(nombre) {
// await pausa hasta que la Promise se resuelve
const saludo = await new Promise(resolve => {
setTimeout(() => resolve(`¡Hola, ${nombre}!`), 1000);
});
return saludo; // Automáticamente envuelto en Promise
}
// ===== COMPARACIÓN: PROMISES vs ASYNC/AWAIT =====
// Con Promises tradicionales (más verboso)
function obtenerDatosPromises() {
return fetch('/api/usuario/1')
.then(response => response.json())
.then(usuario => {
return fetch(`/api/posts/${usuario.id}`);
})
.then(response => response.json())
.then(posts => {
console.log('Posts obtenidos:', posts);
return posts;
})
.catch(error => {
console.error('Error:', error);
throw error;
});
}
// Con async/await (más limpio)
async function obtenerDatosAsync() {
try {
const response = await fetch('/api/usuario/1');
const usuario = await response.json();
const postsResponse = await fetch(`/api/posts/${usuario.id}`);
const posts = await postsResponse.json();
console.log('Posts obtenidos:', posts);
return posts;
} catch (error) {
console.error('Error:', error);
throw error;
}

}