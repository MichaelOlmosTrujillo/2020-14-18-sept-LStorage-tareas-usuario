const botonLogin = document.getElementById('botonLogin');

botonLogin.addEventListener('submit', (e) => {
    const emailLogin = document.getElementById('nombreLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));
    console.log(emailLogin, passwordLogin, usuariosStorage);
    if (!verificacion(emailLogin, passwordLogin, usuariosStorage)) {
        e.preventDefault();
    }



})

function verificacion(correo, contrasena, usuarios) {
    let existe = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == correo && usuarios[i].contrasena == contrasena) {
            existe = true;
        } else {

        }

    }
    return existe;
}