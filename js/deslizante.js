const slider = document.querySelector('.deslizante');
const contenedor_firefox = document.querySelector('.deslizante-firefox');
const navegador = navigator.userAgent;
let counter = 0;



if (navegador.indexOf("Firefox") !== -1) {
    slider.style.display = "none";
    contenedor_firefox.style.display = "flex";
    setInterval(() => {
        counter++;
        contenedor_firefox.style.transform = `translateX(-${counter * 100}%)`;
        if (counter === contenedor_firefox.children.length - 1) {
            counter = -1;
        }
    }, 3000);
}

else {
    setInterval(() => {
        counter++;
        slider.style.transform = `translateX(-${counter * 100}%)`;
        if (counter === slider.children.length - 1) {
            counter = -1;
        }
    }, 2000);
}



