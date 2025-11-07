let configuracion = {
  velocidad: 0,
  nombre: null,
  tema: undefined
};

let velActual = configuracion.velocidad ?? 10;
let nombreUsuario = configuracion.nombre ?? "Anónimo";
let temaPredeterminado = configuracion.tema ?? "claro"; 
let edad = "" ?? 30;

console.log(velActual, nombreUsuario, temaPredeterminado, edad);
