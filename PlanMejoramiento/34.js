import fs from 'fs';
const Johan = "log.txt";
if (fs.existsSync(Johan)) {
try {
fs.unlinkSync(Johan);
console.log(`Archivo '${Johan}' eliminado exitosamente`);
} catch (err) {
console.error("Error al eliminar:", err);
}
} else {
console.log(`El archivo '${Johan}' no existe`);
}