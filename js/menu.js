document.addEventListener('DOMContentLoaded', function() {
    var btnDesplegable = document.querySelector('.btn-desplegable');
    var contenidoDesplegable = document.querySelector('.contenido-desplegable');

    btnDesplegable.addEventListener('click', function() {
        contenidoDesplegable.classList.toggle('mostrar');
    });
});
