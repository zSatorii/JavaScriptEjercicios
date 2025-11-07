// Función que procesa información de usuario
function procesarUsuario(userData = {}) {
// Destructuring con valores por defecto
const {
nombre = 'Usuario Anónimo',
edad = 0,
email = 'no-email@ejemplo.com',
activo = false,
preferencias = {
tema: 'claro',
idioma: 'español'
}
} = userData;
// Destructuring anidado también con defaults
const {
tema = 'claro',
idioma = 'español'
} = preferencias;
return {
nombre,
edad,
email,
activo,
configuracion: `${tema} - ${idioma}`
};
}
// Ejemplos de uso
console.log(procesarUsuario()); // Todos los defaults
console.log(procesarUsuario({ nombre: 'Juan', edad: 25 })); // Algunos defaults
console.log(procesarUsuario({
nombre: 'Ana',
preferencias: { tema: 'oscuro' }
})); // Defaults mixtos