var urlActual = window.location.hash;
// Buscando la procedencia de la cuenta
if(urlActual === '#Carlos'){
    document.getElementById("avatar").src="assets/img/usuarios/carlos.webp";
    var nombre = document.getElementById("username");
    nombre.className = "carlos";
}
if(urlActual === '#Eliud'){
    document.getElementById("avatar").src="assets/img/usuarios/eliud.webp";
    var nombre = document.getElementById("username");
    nombre.className = "eliud";
}
if(urlActual === '#Fernando'){
    document.getElementById("avatar").src="assets/img/usuarios/fernando.webp";
    var nombre = document.getElementById("username");
    nombre.className = "fernando";
}
if(urlActual === '#Manrique'){
    document.getElementById("avatar").src="assets/img/usuarios/manrique.webp";
    var nombre = document.getElementById("username");
    nombre.className = "manrique";
}


//Validacion de usuarios
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var error = document.getElementById('error');
error.style.color = 'red';

function validarCuenta(){
    console.log('Enviando Formulario...');

    var mensajesError =[];
    if(user.value === 'CarlosBurelo' && pass.value === 'carlos31' ){
        console.log('Ingresando como Carlos...');
        window.location=("home.html");
    }
    if(user.value === 'Eliud' && pass.value === 'eliud12' ){
        console.log('Ingresando como Eliud...');
        window.location=("home.html");
    }
    if(user.value === 'Fernando' && pass.value === 'fernandojoestar' ){
        console.log('Ingresando como Fernando...');
        window.location=("home.html");
    }
    if(user.value === 'Manrique' && pass.value === 'manriquejanro' ){
        console.log('Ingresando como Manrique...');
        window.location=("home.html");
    }
    else{
        mensajesError.push('Datos inconrrectos');
        error.innerHTML = mensajesError.join(', ');
        // window.location = ("https://i.pinimg.com/736x/0c/59/44/0c594470f950c6c4f703cbec2c9b485b.jpg");
    }
    return false;
}