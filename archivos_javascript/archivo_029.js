let numeros = [1, 2, 3, 4];
console.log(numeros.length);

numeros.push(5);
let ultimo = numeros.pop(); 

numeros.unshift(0);
let primero = numeros.shift(); 

let frutas = ["manzana", "banana", "cereza", "dátil"];
frutas.splice(1, 2, "kiwi", "mango");
