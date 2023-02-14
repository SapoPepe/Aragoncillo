const openPopupBtns = document.querySelectorAll(".contenedor-chincheta");
const popups = document.querySelectorAll(".popup");

openPopupBtns.forEach((openPopupBtn, Zonas) => {
    openPopupBtn.addEventListener("mouseenter", function() {
        popups[Zonas].style.zIndex = "100";
        openPopupBtn.style.zIndex = "0";
        popups[Zonas].classList.add('show');

        //Remueve la clase "show" si el ratón ya no está sobre el contenedor de la chincheta
        openPopupBtn.addEventListener("mouseleave", function() {
            setTimeout(function() {
                popups[Zonas].classList.remove('show');
                setTimeout(function (){
                    popups[Zonas].style.zIndex = "0";
                    openPopupBtn.style.zIndex = "100";
                }, 600);
            }, 3000);
        });
    });
});
