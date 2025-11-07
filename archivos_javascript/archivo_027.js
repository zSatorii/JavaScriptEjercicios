let etiquetas = "javascript, html, css, web";
let arrayEtiquetas = etiquetas.split(", ");
console.log(arrayEtiquetas);

let mensajeError = "El error ocurrió en la línea 10. error desconocido.";
let mensajeCorregido = mensajeError.replace("error", "fallo");
console.log(mensajeCorregido);

let todoCorregido = mensajeError.replaceAll("error", "fallo");
console.log(todoCorregido); 
let nombreArchivo = "mi-documento-final.pdf";
let nombreBonito = nombreArchivo.replace(/-/g, " ").replace(".pdf", "");
console.log(nombreBonito);
