let limite = parseInt(prompt("Ingrese un número para contar hasta él:"));


if (isNaN(limite) || limite <= 0) {
    alert("Por favor, ingrese un número entero positivo válido.");
} else {
    let mensaje = "Contando:\n"; 

    for (let i = 1; i <= limite; i++) {
        mensaje += i + "\n"; 
    }
    
    alert(mensaje);
}