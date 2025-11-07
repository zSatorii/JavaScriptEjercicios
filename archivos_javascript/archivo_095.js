
const a = document.getElementById('a');
const b = document.getElementById('b');
const res = document.getElementById('res');
document.getElementById('sumar').onclick = () => {
const x = Number(a.value);
const y = Number(b.value);
if(Number.isNaN(x) || Number.isNaN(y)) {
res.textContent = 'Ingresa números válidos';
return;
}
res.textContent = `${x} + ${y} = ${x+y}`;
};