// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});


// Permanecer la cuenta activa
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

// Funciones para el Carrusel
new Glider(document.querySelector('.contenedor__carrusel__1'), {
	slidesToShow: 8,
	slidesToScroll: 8,
	draggable: true,
	arrows: {
		prev: '.anterior1',
		next: '.siguiente1'
	}
});
new Glider(document.querySelector('.contenedor__carrusel__2'), {
	slidesToShow: 8,
	slidesToScroll: 8,
	draggable: true,
	arrows: {
		prev: '.anterior2',
		next: '.siguiente2'
	}
});
new Glider(document.querySelector('.contenedor__carrusel__3'), {
	slidesToShow: 8,
	slidesToScroll: 8,
	draggable: true,
	arrows: {
		prev: '.anterior3',
		next: '.siguiente3'
	}
});
new Glider(document.querySelector('.contenedor__carrusel__4'), {
	slidesToShow: 8,
	slidesToScroll: 8,
	draggable: true,
	arrows: {
		prev: '.anterior4',
		next: '.siguiente4'
	}
});

// Funciones para el panel
function subirAnime(){
    document.getElementById("anime").style.display="block";
    var menuAnime = document.getElementById("boton_anime");
    menuAnime.className = "menu_activo";
    document.getElementById("capitulo").style.display="none";
    document.getElementById("directorio").style.display="none";
    document.getElementById("ajustes").style.display="none";
    document.getElementById("ajustes").style.display="none";
}
function subirCapitulo(){
    document.getElementById("anime").style.display="none";
    document.getElementById("capitulo").style.display="block";
    var menuCapitulo = document.getElementById("boton_capitulo");
    menuCapitulo.className = "menu_activo";
    document.getElementById("directorio").style.display="none";
    document.getElementById("ajustes").style.display="none";
}
function editarDirectorios(){
    document.getElementById("anime").style.display="none";
    document.getElementById("capitulo").style.display="none";
    document.getElementById("directorio").style.display="block";
    var menuDirectorio = document.getElementById("boton_directorio");
    menuDirectorio.className = "menu_activo";
    document.getElementById("ajustes").style.display="none";
}
function ajustes(){
    document.getElementById("anime").style.display="none";
    document.getElementById("capitulo").style.display="none";
    document.getElementById("directorio").style.display="none";
    document.getElementById("ajustes").style.display="block";
    var menuAjustes = document.getElementById("boton_ajustes");
    menuAjustes.className = "menu_activo";
}