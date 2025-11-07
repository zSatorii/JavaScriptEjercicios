let total = 0;
function sumarAlTotal(valor) {
  total += valor; // Modifica una variable externa
  return total;
}

// Función pura (equivalente)
function sumar(a, b) {
  return a + b; // Solo depende de sus argumentos
}
