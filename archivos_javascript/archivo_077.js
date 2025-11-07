fetch('https://api.ejemplo.com/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({
    nombre: "Juan",
    edad: 30
  })
});
