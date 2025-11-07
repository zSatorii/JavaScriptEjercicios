// Añadir al final de un elemento contenedor
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoParrafo);

// Insertar antes de un elemento específico
const referencia = document.getElementById('referencia');
contenedor.insertBefore(nuevoParrafo, referencia);

// insertAdjacentElement
// Posiciones: beforebegin, afterbegin, beforeend, afterend
contenedor.insertAdjacentElement('beforeend', nuevoParrafo);
