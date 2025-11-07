let carrito = ["Manzana", "Plátano"];
carrito.push("Naranja");

let ultimo = carrito.pop();
let primero = carrito.shift();

carrito.unshift("Fresa", "Melón"); 

carrito.splice(1, 1, "Uva");
console.log(carrito);