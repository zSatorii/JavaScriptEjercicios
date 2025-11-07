let tareas = ["Estudiar", "Comprar"];
let nuevaTarea = "Estudiar";
if (!tareas.includes(nuevaTarea)) {
  tareas.push(nuevaTarea);
}
console.log(tareas);