// Acceder a un formulario por su ID
const miFormulario = document.getElementById('formulario-contacto');

// A través de la colección forms
const formularios = document.forms;
const primerFormulario = document.forms[0];
const formularioPorNombre = document.forms['formulario-contacto'];

// Usando querySelector
const formQuery = document.querySelector('form.formulario-registro');
// Por el nombre del elemento
const email = miFormulario.elements.email; // o miFormulario.elements['email']

// Por índice
const primerElemento = miFormulario.elements[0];

// Por ID o usando selectores
const password = document.getElementById('password');
const checkbox = miFormulario.querySelector('input[type="checkbox"]');