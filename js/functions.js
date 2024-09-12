// Selecciona el primer elemento con la clase ".navbar" que representa el menú de navegación
let enlaces_header = document.querySelectorAll(".navbar")[0];
let ico_hamburguer = true;

// Añade un event listener al icono de hamburguesa para mostrar/ocultar el menú
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (ico_hamburguer) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        ico_hamburguer = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        ico_hamburguer = true;
    }

    // Alterna la clase "hamburgueropen" para mostrar/ocultar el menú
    enlaces_header.classList.toggle("hamburgueropen");
});

// Cuando se hace clic en el menú, oculta el menú y cambia el color del icono
document.querySelectorAll(".navbar")[0].addEventListener("click", function() {
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
});
