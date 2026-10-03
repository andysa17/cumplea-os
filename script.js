/* =================================
   CHAPTER 17 — ANDREA
   JAVASCRIPT
================================= */


/* =================================
   INTRO
================================= */

const intro = document.getElementById("intro");
const entrar = document.getElementById("entrar");

entrar.addEventListener("click", function () {

    intro.classList.add("hidden");

});


/* =================================
   MÚSICA
================================= */

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

botonMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botonMusica.innerHTML = "⏸️ Pausar mi canción";

    } else {

        musica.pause();

        botonMusica.innerHTML = "🎵 Reproducir mi canción";

    }

});


/* =================================
   CUENTA REGRESIVA
================================= */

function actualizarCuentaRegresiva() {

    const ahora = new Date();

    let año = ahora.getFullYear();

    let cumpleaños = new Date(año, 9, 6, 0, 0, 0);

    /*
       Octubre es el mes 9 porque
       JavaScript empieza a contar
       los meses desde 0.
    */

    if (ahora > cumpleaños) {

        cumpleaños = new Date(
            año + 1,
            9,
            6,
            0,
            0,
            0
        );

    }

    const diferencia = cumpleaños - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


/* Actualizar cada segundo */

actualizarCuentaRegresiva();

setInterval(
    actualizarCuentaRegresiva,
    1000
);


/* =================================
   CONFETI
================================= */

const celebrar = document.getElementById("celebrar");

celebrar.addEventListener("click", function () {

    for (let i = 0; i < 100; i++) {

        crearConfeti();

    }

});


function crearConfeti() {

    const confeti = document.createElement("div");

    confeti.classList.add("confeti");


    /* Posición horizontal */

    confeti.style.left =
        Math.random() * 100 + "vw";


    /* Tamaño */

    const tamaño =
        Math.random() * 8 + 5;

    confeti.style.width =
        tamaño + "px";

    confeti.style.height =
        tamaño + "px";


    /* Diferentes formas */

    if (Math.random() > 0.5) {

        confeti.style.borderRadius = "50%";

    }


    /* Duración */

    confeti.style.animationDuration =
        Math.random() * 2 + 2 + "s";


    /* Retraso */

    confeti.style.animationDelay =
        Math.random() * 0.5 + "s";


    document.body.appendChild(confeti);


    /* Eliminar después de la animación */

    setTimeout(function () {

        confeti.remove();

    }, 4000);
}
