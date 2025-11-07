// Función que intenta obtener datos con múltiples fallbacks
async function obtenerDatosConFallback(userId) {
let datos = null;
// Intento 1: API principal
try {
const respuesta = await fetch(`/api/usuarios/${userId}`);
if (!respuesta.ok) throw new Error('API principal falló');
datos = await respuesta.json();
console.log('Datos obtenidos de API principal');
return datos;
} catch (error) {
console.warn('API principal falló:', error.message);
}
// Intento 2: Cache local
try {
datos = JSON.parse(localStorage.getItem(`usuario-${userId}`));
if (datos) {
console.log('Datos obtenidos del cache local');
return datos;
}
} catch (error) {
console.warn('Cache local falló:', error.message);
}
// Intento 3: Datos por defecto
try {
datos = await cargarDatosDefault();
console.log('Usando datos por defecto');
return datos;
} catch (error) {
console.error('Todos los fallbacks fallaron:', error.message);
}
// Último recurso: objeto básico
return {
id: userId,
nombre: 'Usuario Desconocido',
email: 'no-disponible@ejemplo.com',
estado: 'offline'
};
}
// Función auxiliar para datos default
async function cargarDatosDefault() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({
id: 'default',
nombre: 'Usuario Demo',
email: 'demo@ejemplo.com',
estado: 'demo'
});
}, 100);
});
}
