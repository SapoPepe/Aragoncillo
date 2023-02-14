document.addEventListener("DOMContentLoaded", function() {
    const cardClient = document.querySelector('.card-client');
    cardClient.style.display = 'none';

    const showCardClient = document.querySelector('.show-card-client');
    showCardClient.addEventListener('click', function() {
        if (cardClient.style.display === 'none') {
            cardClient.style.display = 'block';
        } else {
            cardClient.style.display = 'none';
        }
    });
});