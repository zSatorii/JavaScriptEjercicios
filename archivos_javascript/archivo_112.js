// ===== GET REQUEST BÁSICO =====
async function obtenerUsuarios() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users');
// Verificar si la respuesta es exitosa
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
const usuarios = await response.json();
console.log('Usuarios obtenidos:', usuarios);
return usuarios;
} catch (error) {
console.error('Error al obtener usuarios:', error);
throw error;
}
}
// ===== POST REQUEST CON DATOS =====
async function crearUsuario(datosUsuario) {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer tu-token-aqui'
},
body: JSON.stringify(datosUsuario)
});
if (!response.ok) {
throw new Error(`Error ${response.status}: ${response.statusText}`);
}
const usuarioCreado = await response.json();
console.log('Usuario creado:', usuarioCreado);
return usuarioCreado;
} catch (error) {
console.error('Error al crear usuario:', error);
throw error;
}
}
// ===== FUNCIÓN UTILITARIA PARA FETCH =====
async function apiRequest(url, options = {}) {
const defaultOptions = {
headers: {
'Content-Type': 'application/json'
}
};
const config = { ...defaultOptions, ...options };
try {
const response = await fetch(url, config);
if (!response.ok) {
throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}
// Detectar tipo de contenido
const contentType = response.headers.get('content-type');
if (contentType && contentType.includes('application/json')) {
return await response.json();
} else {
return await response.text();
}
} catch (error) {
console.error('API Request failed:', error);
throw error;
}
}
