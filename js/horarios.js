const botones = document.querySelectorAll('.boton');
const contenedores = document.querySelectorAll('.timeline');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const contenedorAMostrar = boton.getAttribute('data-contenedor');
        contenedores.forEach(contenedor => {
            if (contenedor.classList.contains(contenedorAMostrar)) {
                contenedor.style.display = 'table';
                setTimeout(() => {
                    contenedor.style.opacity = 1;
                }, 100);
            } else {
                contenedor.style.opacity = 0;
                setTimeout(() => {
                    contenedor.style.display = 'none';
                }, 300);
            }
        });
    });
});
