const sliders = document.querySelectorAll('.deslizante-firefox');
let counter = 0;
let maxSlideCount = getMaxSlideCount();

function getMaxSlideCount() {
    let maxCount = 0;
    sliders.forEach(slider => {
        const slideCount = slider.children.length;
        if (slideCount > maxCount) {
            maxCount = slideCount;
        }
    });
    return maxCount;
}

setInterval(() => {
    counter++;

    sliders.forEach(slider => {
        const slideCount = slider.children.length;
        const adjustedCounter = counter % slideCount;
        slider.style.transform = `translateX(-${adjustedCounter * 100}%)`;
    });
}, 6000);
