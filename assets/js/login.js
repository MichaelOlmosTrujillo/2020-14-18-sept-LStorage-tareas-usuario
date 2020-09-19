let botonLateral = document.getElementById('añadirtareaLateral');
let tareasUsuario = document.getElementById('tareasUsuario');
let anadirTareaMain = document.getElementById('botonMain');
let TareasPendientes = document.getElementById('TareasPendientes');
let usuario =
    console.log(TareasPendientes, );
botonLateral.addEventListener('click', () => {
    let tarea = prompt('Escribe tu tarea');
    tareasUsuario.innerHTML += '<li> ' + tarea + '</h1>';
})

anadirTareaMain.addEventListener('click', () => {
    let inputMain = document.getElementById('tareaMain').value;
    TareasPendientes.innerHTML += `<tr> <td> ${inputMain} </td> </tr>`;
    console.log(inputMain);
})