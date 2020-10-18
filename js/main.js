const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
});



// Permanecer la cuenta activa
if (localStorage.getItem('cuenta') === 'Carlos'){
	document.getElementById("avatar").src="https://carlos-burelo.github.io/Boreal/assets/img/usuarios/carlos.webp";
    var adminName = localStorage.getItem('cuenta');
	document.getElementById('admin__name').innerHTML=adminName;
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
