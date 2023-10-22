var listado_palabras = ["Manzana", "Perro", "Gato", "Casa", "Árbol", "Coche", "Sol", "Luna", "Estrella", "Montaña", "Playa", "Libro", "Bicicleta", "Amigo", "Familia", "Amor", "Comida", "Agua", "Fuego", "Tierra", "Aire", "Flor", "Cielo", "Mar", "Río", "Montaña", "Universo", "Escuela", "Trabajo", "Música", "Película", "Arte", "Historia", "Viaje", "Dinero", "Tiempo", "Sueño", "Paz", "Guerra", "Cielo", "Invierno", "Verano", "Primavera", "Otoño", "Dolor", "Alegría", "Silencio", "Risa", "Lágrima", "Esperanza"];

var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    document.getElementById("palabra_ingresada").focus();
    cargarPalabra();
    document.getElementById("palabra_ingresada").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            comparar();
        }
    });

    timer = setInterval(restarTiempo, 1000);
}

function cargarPalabra() {
    indice = Math.floor(Math.random() * listado_palabras.length);
    document.getElementById("palabra").textContent = listado_palabras[indice];
    listado_palabras.splice(indice, 1);
}

function comparar() {
    var palabra_mostrada = document.getElementById("palabra").textContent.trim().toUpperCase();
    var palabra_tecleada = document.getElementById("palabra_ingresada").value.trim().toUpperCase();

    if (palabra_mostrada === palabra_tecleada) {
        acertadas++;
        document.getElementById("palabra_ingresada").value = "";
        agregarNodo(palabra_tecleada);
        cargarPalabra();
    }
}

function agregarNodo(palabra) {
    var span = document.createElement('span');
    span.textContent = palabra;
    document.getElementById("registro").appendChild(span);
}
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}