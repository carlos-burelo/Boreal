const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById("admin__img").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/carlos.webp";
document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/carlos.webp";
var adminName = localStorage.getItem('cuenta');
document.getElementById('admin__name').innerHTML=adminName;
document.getElementById('username').innerHTML=adminName;

const enlaces = document.querySelectorAll('#contenedor__panel__dasboard a li');

enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        enlaces.forEach((enlace) => enlace.classList.remove('activo'));
        evento.target.classList.add('activo');
    });
});

function subir_anime(){
    document.getElementById('id__navegaccion').innerHTML="Subir anime";
    document.getElementById("bienvenida__panel").style.display="none";
    document.getElementById("subir__anime").style.display="block";
    document.getElementById("editar__anime").style.display="none";
    document.getElementById("borrar__anime").style.display="none";
    document.getElementById("configuracion").style.display="none";
}
function editar_anime(){
    document.getElementById('id__navegaccion').innerHTML="Editar anime";
    document.getElementById("bienvenida__panel").style.display="none";
    document.getElementById("subir__anime").style.display="none";
    document.getElementById("editar__anime").style.display="block";
    document.getElementById("borrar__anime").style.display="none";
    document.getElementById("configuracion").style.display="none";
}
function borrar_anime(){
    document.getElementById('id__navegaccion').innerHTML="Borrar anime";
    document.getElementById("bienvenida__panel").style.display="none";
    document.getElementById("subir__anime").style.display="none";
    document.getElementById("editar__anime").style.display="none";
    document.getElementById("borrar__anime").style.display="block";
    document.getElementById("configuracion").style.display="none";
}
function configuracion(){
    document.getElementById('id__navegaccion').innerHTML="Configuracion";
    document.getElementById("bienvenida__panel").style.display="none";
    document.getElementById("subir__anime").style.display="none";
    document.getElementById("editar__anime").style.display="none";
    document.getElementById("borrar__anime").style.display="none";
    document.getElementById("configuracion").style.display="block";
}