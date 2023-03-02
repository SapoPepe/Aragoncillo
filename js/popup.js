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
