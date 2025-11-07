function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { id: 1, nombre: "Producto" };
    callback(null, datos);
  }, 2000);
}

obtenerDatos((error, datos) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Datos recibidos:", datos);
  }
});
