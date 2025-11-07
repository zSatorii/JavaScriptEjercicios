// Lista de frutas (datos de ejemplo)
const frutas = ['Manzana', 'Plátano', 'Naranja', 'Uva', 'Fresa', 'Kiwi', 'Mango'];
// Referencias DOM
const inputBusqueda = document.getElementById('busqueda');
const listaContainer = document.getElementById('lista');
// Función para renderizar la lista
function mostrarFrutas(frutasFiltradas) {
listaContainer.innerHTML = frutasFiltradas
.map(fruta => 