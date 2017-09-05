

var tabla = [

    {
        nombre: "Real Madrid",
        puntos: 33
    },
    {
        nombre: "Barcelona",
        puntos: 32
    },
    {
        nombre: "Villa Real",
        puntos: 30
    },
    {
        nombre: "UD las palmas",
        puntos: 28
    },
];


window.onload = cargarEventos;

function cargarEventos() {
    document.getElementById("mostrartabla").addEventListener("click", mostrartabla, false);
    document.getElementById("nuevoequipo").addEventListener("submit",nuevoequipo,false);
}

function mostrartabla() {
    var cuerpotabla = document.getElementById("equipostabla");
    var tablallena = "";
    for (var i = 0; i < tabla.length; i++) 
    {
        tablallena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].puntos + "</td></tr>";
    }
    
    cuerpotabla.innerHTML=tablallena;
}
function nuevoequipo(event) 
{
    event.preventDefault(); //cuando no hay action en el formulario
    var equipointroducidoporusario =document.getElementById("equipo").value; //nombre en formulario
    var puntosintroducidosporusuario=document.getElementById("puntos").value; //nombre en formulario
    var nuevoequipo={nombre:equipointroducidoporusario,puntos:puntosintroducidosporusuario};
    tabla.push(nuevoequipo);
}