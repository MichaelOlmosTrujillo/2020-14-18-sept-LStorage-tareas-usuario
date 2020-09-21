const formulario = document.getElementById('formulario')
const boton = document.getElementById('enviar');
// console.log(nombre);
// console.log(formulario);
let listaUsuarios = [];
formulario.addEventListener('submit', (e) => {
    // console.log(nombre);
    // e.preventDefault();
    // console.log(nombre);
    const inputNombre = document.getElementById('nombre').value;
    const inputApellido = document.getElementById('apellido').value;
    const inputEmail = document.getElementById('email').value;
    const inputSexo = document.getElementById('sexo').value;
    const inputConstrasena = document.getElementById('password').value;
    // console.log(nombre, apellido, email, sexo);
    const usuario = {
        nombre: inputNombre,
        apellido: inputApellido,
        email: inputEmail,
        sexo: inputSexo,
        contrasena: inputConstrasena
    }
    guardarEnStorage(usuario);

})

const guardarEnStorage = (usuario) => {
    if (localStorage.getItem('usuarios') == null) {
        listaUsuarios.push(usuario);
        const usuariosString = JSON.stringify(listaUsuarios);
        localStorage.setItem('usuarios', usuariosString);
    } else {
        listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
        listaUsuarios.push(usuario);
        const usuariosString = JSON.stringify(listaUsuarios);
        localStorage.setItem('usuarios', usuariosString);
    }
}