const usuario = {
  nombre: "Ana",
  direccion: {
    calle: "Calle Falsa 123"
  }
};

console.log(usuario.direccion?.calle);
console.log(usuario.telefono?.numero);