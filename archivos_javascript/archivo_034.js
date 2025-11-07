let datosOriginales = [10, 20, 30, 40, 50];
let subconjunto = datosOriginales.slice(1, 4);

let primerosNumeros = [1, 2, 3];
let segundosNumeros = [4, 5, 6];
let todosNumeros = primerosNumeros.concat(segundosNumeros);
function obtenerPagina(datos, pagina, elementosPorPagina) {
  let inicio = (pagina - 1) * elementosPorPagina;
  let fin = inicio + elementosPorPagina;
  return datos.slice(inicio, fin);
}

let listaCompleta = ["A", "B", "C", "D", "E", "F"];
console.log(obtenerPagina(listaCompleta, 2, 2));