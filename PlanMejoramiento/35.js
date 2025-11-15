class JohanGestion {
constructor() {
this.Sebastian = [];
}

agregar(Johan) {
this.Sebastian.push(Johan);
console.log(`Tarea agregada: "${Johan}"`);
}

completar(indice) {
if (indice >= 0 && indice < this.Sebastian.length) {
this.Sebastian[indice] = "7 " + this.Sebastian[indice];
console.log("Tarea marcada como completada");
} else {
console.log("Índice inválido");
}
}

obtenerEstadisticas() {
const total = this.Sebastian.length;
const completadas = this.Sebastian.filter(
t => t.startsWith("7")
).length;
const pendientes = total - completadas;

return { total, completadas, pendientes };
}

mostrar() {
console.log("\n=== LISTA DE TAREAS ===");
this.Sebastian.forEach((Johan, i) => {
console.log(`${i}. ${Johan}`);
});
}
}