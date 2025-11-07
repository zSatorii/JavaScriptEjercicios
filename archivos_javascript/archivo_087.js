// Almacenar datos
localStorage.setItem('usuario', 'Juan');
localStorage.setItem('edad', '28');

// Recuperar datos
const usuario = localStorage.getItem('usuario');
const edad = localStorage.getItem('edad');

// Eliminar datos
localStorage.removeItem('usuario');

// Limpiar todo el almacenamiento
localStorage.clear();
