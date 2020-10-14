
// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});
// INgresando a ala cuenta y guardando datos en 
function ingresarCarlos(){
    localStorage.setItem('cuenta','carlos');
    window.location=("ingresar");   
}
function ingresarEliud(){
    window.location=("ingresar");
    localStorage.setItem('cuenta','eliud');
}
function ingresarFernando(){
    window.location=("ingresar");
    localStorage.setItem('cuenta','fernando');
}
function ingresarManrique(){
    window.location=("ingresar");
    localStorage.setItem('cuenta','manrique');
}

// Buscando la cuenta activa

if (localStorage.getItem('cuenta') === 'carlos'){
    document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/carlos.webp";
    var nombre = document.getElementById("username");
    nombre.className = "carlos";
}
if (localStorage.getItem('cuenta') === 'eliud'){
    document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/eliud.webp";
    var nombre = document.getElementById("username");
    nombre.className = "eliud";
}
if (localStorage.getItem('cuenta') === 'fernando'){
    document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/fernando.webp";
    var nombre = document.getElementById("username");
    nombre.className = "fernando";
}
if (localStorage.getItem('cuenta') === 'manrique'){
    document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/manrique.webp";
    var nombre = document.getElementById("username");
    nombre.className = "manrique";
}

var user = document.getElementById('user');
var pass = document.getElementById('pass');

function validarCuenta(){
    console.log('Enviando Formulario...');
    if(user.value === 'CarlosBurelo' && pass.value === 'carlos31' ){
        console.log('Ingresando como Carlos...');
        window.location=("home");
    }
    if(user.value === 'Eliud' && pass.value === 'eliud12' ){
        console.log('Ingresando como Eliud...');
        window.location=("home");
    }
    if(user.value === 'Fernando' && pass.value === 'fernandojoestar' ){
        console.log('Ingresando como Fernando...');
        window.location=("home");
    }
    if(user.value === 'Manrique' && pass.value === 'manriquejanro' ){
        console.log('Ingresando como Manrique...');
        window.location=("home");
    }
    return false;
}