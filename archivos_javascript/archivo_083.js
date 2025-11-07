// Seleccionar un elemento por su ID
const titulo = document.getElementById('titulo-principal');

// Seleccionar elementos por clase (devuelve una colección)
const parrafos = document.getElementsByClassName('parrafo');

// Seleccionar elementos por etiqueta (devuelve una colección)
const botones = document.getElementsByTagName('button');

// Seleccionar usando selectores CSS (devuelve el primer elemento)
const menu = document.querySelector('nav.menu');

// Seleccionar todos los elementos que coincidan (devuelve NodeList)
const enlaces = document.querySelectorAll('a.enlace-externo');
