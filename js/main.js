// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__container1'), {
		slidesToShow: 8,
		slidesToScroll: 8,
		draggable: true,
		arrows: {
			prev: '.anterior1',
			next: '.siguiente1'
		}
	});
});
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__container2'), {
		slidesToShow: 8,
		slidesToScroll: 8,
		draggable: true,
		arrows: {
			prev: '.anterior2',
			next: '.siguiente2'
		}
	});
});
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__container3'), {
		slidesToShow: 8,
		slidesToScroll: 8,
		draggable: true,
		arrows: {
			prev: '.anterior3',
			next: '.siguiente3'
		}
	});
});
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__container4'), {
		slidesToShow: 8,
		slidesToScroll: 8,
		draggable: true,
		arrows: {
			prev: '.anterior4',
			next: '.siguiente4'
		}
	});
});