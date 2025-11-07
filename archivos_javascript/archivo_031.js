let productos = ["Leche", "Pan", "Huevos", "Pan"];
console.log(productos.length);

let indicePan = productos.indexOf("Pan");
let existeQueso = productos.includes("Queso");
if (!existeQueso) {
  console.log("Añadir queso a la lista.");
}