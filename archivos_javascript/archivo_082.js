try {
  const resultado = operacionRiesgosa();
  console.log("Operación exitosa:", resultado);
} catch (error) {
  console.error("Ocurrió un error:", error.message);
} finally {
  console.log("Limpieza de recursos");
}
