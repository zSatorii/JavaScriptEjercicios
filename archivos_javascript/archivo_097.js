document.getElementById('fmt').onclick = () => {
const valor = Number(
document.getElementById('precio').value
) || 0;
const moneda = document.getElementById('moneda').value;
const nf = new Intl.NumberFormat('es-ES', {
style: 'currency',
currency: moneda
});
document.getElementById('out4').textContent =
nf.format(valor);
};