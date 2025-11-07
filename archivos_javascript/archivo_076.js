fetch('https://api.ejemplo.com/datos')
  .then(response => {
    console.log('Estado:', response.status);
    console.log('OK:', response.ok);
    return response.json(); 
  })
  .then(datos => {
    console.log('Datos:', datos);
  })
  .catch(error => {
    console.error('Error en la petición:', error);
  });
