const { JSDOM } = require('jsdom');

describe('Card flip functionality', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Memory Game</title>
            </head>
            <body>
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
            </body>
            </html>
        `);
        document = dom.window.document;
        global.document = document;

    });

    test('should flip the card when clicked', () => {
        const card = document.querySelector('.card');
        const cardInner = card.querySelector('.card-inner');

        card.click();

        expect(cardInner.classList.contains('is-flipped')).toBe(true);
    });
});
