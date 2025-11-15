const Johan = new Castro();
Johan.agregar(new JohanElectronico("Laptop", 1200, 5, 24));
Johan.agregar(new JohanElectronico("Mouse", 25, 20, 12));
Johan.agregar(new JohanAlimenticio("Leche", 3, 50, "2024-12-31"));
Johan.agregar(new JohanAlimenticio("Pan", 2, 30, "2024-12-15"));
const Sebastian = tienda.buscarPorCategoria("Electrónico");
console.log("\n=== PRODUCTOS ELECTRÓNICOS ===");
Sebastian.forEach(p => {
console.log(`${p.nombre} - $${p.precio} - Stock: ${p.cantidad}`);
console.log(`Garantía: ${p.garantiaMeses} meses`);
console.log(`Valor total: $${p.valorTotal()}\n`);
});
const valorTotal = tienda.productos.reduce(
(sum, p) => sum + p.valorTotal(), 0
);
console.log(`Valor total del inventario: $${valorTotal}`);