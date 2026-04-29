document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ENTRAR EN LA WEB
    ========================= */
    const boton = document.getElementById("entrar");
    const bienvenida = document.getElementById("bienvenida");
    const contenido = document.getElementById("contenido-web");

    boton.addEventListener("click", function () {
        bienvenida.style.display = "none";
        contenido.style.display = "block";
    });

    /* =========================
       CARRUSEL (5 segundos)
    ========================= */
    const imagenes = document.querySelectorAll(".carrusel img");
    let indice = 0;

    function mostrar(i) {
        imagenes.forEach((img, index) => {
            img.classList.toggle("active", index === i);
        });
    }

    if (imagenes.length > 0) {
        mostrar(0);

        setInterval(() => {
            indice = (indice + 1) % imagenes.length;
            mostrar(indice);
        }, 5000);
    }

    /* =========================
       CONTADOR SEGUNDOS
    ========================= */
    const contador = document.getElementById("contador");
    let segundos = 0;

    setInterval(() => {
        segundos++;
        contador.textContent = `${segundos} segundos`;
    }, 1000);

});