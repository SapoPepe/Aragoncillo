const slider = document.querySelector('.deslizante');
let contador = 0;

setInterval(() => {
    contador++;
    slider.style.transform = `translateX(-${contador * 100}%)`;
    if (contador === slider.children.length - 1) {
        contador = -1;
    }
}, 3000);

