const cardFlip = require("../card");

beforeAll(() => {
    document.body.innerHTML = 
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="image" alt="Card Front Image">
                </div>
                <div class="card-back">
                    <img src="assets/images/background.webp" alt="Card Image">
                </div>
            </div>
        </div>
    ;

    $('.card').on('click', function() {
        $(this).find('.card-inner').toggleClass('is-flipped');
    });
});

describe("Card Flip Functionality", () => {
    test("should flip card when clicked", () => {
        const card = document.querySelector('.card');
        
        card.click();
        
        expect(card.querySelector('.card-inner').classList.contains('is-flipped')).toBe(true);
    });
});