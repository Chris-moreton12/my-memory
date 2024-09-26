document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    function flipCard() {

        this.querySelector('.card-inner').classList.toggle('is-flipped');
    }


    cards.forEach(card => card.addEventListener('click', flipCard));
});
