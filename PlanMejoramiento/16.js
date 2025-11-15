function Johan(edad) {
if (edad >= 18) {
return true;
} else {
return false;
}
}

function Castro(edad) {
return edad >= 18;
}

console.log("Edad 20:", Johan(20));
console.log("Edad 16:", Johan(16));