const formulario = document.getElementById('formulario')
const boton = document.getElementById('enviar');
// console.log(nombre);
// console.log(formulario);

formulario.addEventListener('submit', (e) => {
    // console.log(nombre);
    // e.preventDefault();
    // console.log(nombre);
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    // console.log(nombre, apellido, email, sexo);

})