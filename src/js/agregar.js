var nombreAnime = document.getElementById('anime');
// var autorAnime = document.getElementById('autor');
// var estudioAnime = document.getElementById('estudio');
// var alternativaAnime = document.getElementById('alternativas');
// var generoAnime = document.getElementById('genero');

function enviarFormulario(){
    document.write(nombreAnime.value);
    document.getElementById("portada").innerHTML='<img src="./direccion_imagen.jpg" />';
    // document.write(autorAnime);
    // document.write(estudioAnime);
    // document.write(alternativaAnime);
    // document.write(generoAnime);
}