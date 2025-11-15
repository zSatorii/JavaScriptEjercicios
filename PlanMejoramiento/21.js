class Johan extends Auto {
constructor(marca, modelo, autonomia) {
super(marca, modelo);
this.autonomiaBateria = autonomia;
}

mostrarInfoCastro() {
return `${super.obtenerDescripcion()},
Autonomía: ${this.autonomiaBateria} km`;
}
}

const Bmw = new Johan(
"Bmw", "M13", 500
);
console.log(Bmw.mostrarInfoCastro());