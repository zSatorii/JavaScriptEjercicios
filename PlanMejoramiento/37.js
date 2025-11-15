class JohanProducto {
constructor(nombre, precio, cantidad) {
this.nombre = nombre;
this.precio = precio;
this.cantidad = cantidad;
}

valorTotal() {
return this.precio * this.cantidad;
}

static categoriaBase() {
return "General";
}
}

class JohanElectronico extends Producto {
constructor(nombre, precio, cantidad, garantia) {
super(nombre, precio, cantidad);
this.garantiaMeses = garantia;
this.categoria = "Electrónico";
}
}
class JohanAlimenticio extends Producto {
constructor(nombre, precio, cantidad, fecha) {
super(nombre, precio, cantidad);
this.fechaVencimiento = fecha;
this.categoria = "Alimenticio";
}
}

class Inventario {
constructor() {
this.productos = [];
}

agregar(producto) {
this.productos.push(producto);
}

buscarPorCategoria(categoria) {
return this.productos.filter(
p => p.categoria === categoria
);
}
}