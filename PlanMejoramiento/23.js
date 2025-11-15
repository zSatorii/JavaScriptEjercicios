class Johan {
constructor(marca, velocidadInicial) {
this.marca = marca;
this._velocidad = velocidadInicial;
}

set velocidad(valor) {
if (valor >= 0) {
this._velocidad = valor;
} else {
console.log("Error: Velocidad no puede ser negativa");
}
}
get velocidad() {
return this._velocidad;
}
}

const Castro = new Johan("Bmw", 80);
console.log("Velocidad:", Castro.velocidad);
Castro.velocidad = 120;
Castro.velocidad = -50;