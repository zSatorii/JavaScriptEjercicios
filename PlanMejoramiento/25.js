class Johan {
constructor(calle, codigoPostal) {
this.calle = calle;
this.codigoPostal = codigoPostal;
}
}

class Castro {
constructor(nombre, direccion) {
this.nombre = nombre;
this.direccion = direccion;
}

Gonzalez() {
console.log(`${this.nombre} vive en:
${this.direccion.calle},
CP ${this.direccion.codigoPostal}`);
}
}

const Sebastian = new Johan(
"Carrera 2 #5-04", "2500010"
);
const juan = new Castro("Juan Pérez", Sebastian);
juan.Gonzalez();