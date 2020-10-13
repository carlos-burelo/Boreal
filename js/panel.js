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

//Metodo para la portada
var portadaImagen = document.getElementById("portada");








// function ocultarEntradas(){
//     document.getElementById("entradas").style.display="none";
// }