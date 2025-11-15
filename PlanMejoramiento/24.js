// BaseDeDatosSingleton.js
class BaseDeDatosJohan {
constructor(url) {
if (BaseDeDatosJohan.instancia) {
return BaseDeDatosJohan.instancia;
}

this.url = url;
this.conectado = true;
BaseDeDatosJohan.instancia = this;
}
}

const Castro1 = new BaseDeDatosJohan("servidor_prod");
const Castro2 = new BaseDeDatosJohan("servidor_test");
console.log("URL db1:", Castro1.url);
console.log("URL db2:", Castro2.url);
console.log("¿Misma instancia?", Castro1 === Castro2);