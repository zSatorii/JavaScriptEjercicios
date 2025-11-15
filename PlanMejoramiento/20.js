class Johan {
constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
}
Sebastian() {
return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
}
}
const Castro = new Johan("Bmw", "M13");
console.log(Castro.Sebastian());

export default Johan;