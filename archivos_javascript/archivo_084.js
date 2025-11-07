// Crear un nuevo elemento
const nuevoParrafo = document.createElement('p');

// Añadir contenido
nuevoParrafo.textContent = 'Este es un párrafo creado con JavaScript';

// Añadir atributos
nuevoParrafo.id = 'parrafo-dinamico';
nuevoParrafo.className = 'texto destacado';
nuevoParrafo.setAttribute('data-creado', 'true');
