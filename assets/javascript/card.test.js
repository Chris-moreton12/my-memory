const cardFlip = require("../card");

beforeAll(() => {
    document.body.innerHTML = `
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
    `;
});

describe("Card Flip Functionality", () => {
    test("should flip card when clicked", () => {
        const card = document.querySelector('.card-inner');
        
        card.click();
        
        expect(card.classList.contains('is-flipped')).toBe(true);
    });
});
