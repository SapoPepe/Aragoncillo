//Popup que recomienda poner la página en modo escritorio
window.onload = function() {
    var myPopup = document.getElementById("popup");
    var closePopup = document.getElementById("cerrar-1");
    myPopup.style.display = "block";
    closePopup.onclick = function() {
    myPopup.style.display = "none";
}
}
