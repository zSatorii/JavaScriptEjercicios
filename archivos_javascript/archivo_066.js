function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.mostrarInfo = function() {
    return `${this.nombre} - $${this.precio}`;
  };
}

const laptop = new Producto("MacBook Pro", 1999);