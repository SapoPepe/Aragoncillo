const openPopupBtns = document.querySelectorAll(".img-button");
const closePopupBtns = document.querySelectorAll(".close-popup-btn");
const popups = document.querySelectorAll(".popup-1");

openPopupBtns.forEach((openPopupBtn, index) => {
    openPopupBtn.addEventListener("click", function() {
        popups[index].style.display = "block";
    });
});

closePopupBtns.forEach(closePopupBtn => {
    closePopupBtn.addEventListener("click", function() {
        popups.forEach(popup => {
            popup.style.display = "none";
        });
    });
});


function setMaxHeight() {
    var popupContents = document.querySelectorAll('.popup-content');
    var windowHeight = window.innerHeight;
    var maxPopupHeight = windowHeight * 0.8; // Ajusta el porcentaje según tus preferencias (aquí se usa el 80% del alto de la ventana)

    for (var i = 0; i < popupContents.length; i++) {
        popupContents[i].style.maxHeight = maxPopupHeight + 'px';
    }
}

window.addEventListener('resize', setMaxHeight);
window.addEventListener('load', setMaxHeight);
