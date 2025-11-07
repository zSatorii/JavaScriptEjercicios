let frase = "El pato Donald es un pato muy famoso.";
console.log(frase.indexOf("pato"));
console.log(frase.lastIndexOf("pato"));
console.log(frase.includes("Donald")); 

let email = "usuario@ejemplo.com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email válido.");
}