const formulario = document.getElementById('formulario')
const nombre = document.getElementById('nombre').value;
const boton = document.getElementById('enviar');
// console.log(nombre);
console.log(formulario);

boton.addEventListener('submit', () => {
    console.log(nombre);
})