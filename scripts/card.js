$(document).ready(function () {
    let firstCard = null;
    let secondCard = null;
    let preventClick = false;
    let matchedCards = 0;
    const totalPairs = 7;

    // Click Event for Game Start Button
    $("#start-game").click(function () {
        // Hide the welcome message, show the game content after clicking start
        $("#welcome-message").fadeOut(500, function () {
            $("#game-content").fadeIn(500);
            shuffleCards(); // Shuffle the cards at the start of the game
            attachCardClickEvent();
        });
    });

    // Function to shuffle the cards randomly
    function shuffleCards() {
        const cards = $(".card");
        const shuffledCards = cards.sort(function () {
            return 0.5 - Math.random();
        });

        // Clear the existing card grid and append the shuffled cards
        $(".card-grid").empty().append(shuffledCards);
    }

    // Function to attach the click event to cards
    function attachCardClickEvent() {
        $(".card").off("click").on("click", function () {
            if (preventClick || $(this).find(".card-inner").hasClass("is-flipped")) {
                return; // Prevents more than 2 cards from being turned at once
            }

            // Flip the card clicked
            $(this).find(".card-inner").addClass("is-flipped");

            if (!firstCard) {
                firstCard = $(this);
            } else {
                secondCard = $(this);
                preventClick = true;

                 // Check if the flame card is clicked
                 if (firstCard.hasClass("fire") || secondCard.hasClass("fire")) {
                    setTimeout(() => {
                        alert("You Failed!"); // Show the failure message if flame card is clicked
                        resetGame(); // Reset the game if flame card is clicked
                    }, 500);
                    return;
                }

                // Check if the 2 cards that are flipped, match
                const firstCardImg = firstCard.find(".card-front img").attr("src");
                const secondCardImg = secondCard.find(".card-front img").attr("src");

                if (firstCardImg === secondCardImg) {
                    // If the 2 Cards match, keep them flipped and do not allow the mto be cliked again
                    matchedCards++;
                    firstCard = null;
                    secondCard = null;
                    preventClick = false;

                    // Check if the player has matched all pairs
                    if (matchedCards === totalPairs) {
                        setTimeout(() => {
                            alert("You Win!"); // Show the win message if all pairs are matched 
                            resetGame(); // Reset the game if all pairs are matched
                        }, 500);
                    }
                } else {
                    // Cards don't match, flip them back after a short delay
                    setTimeout(() => {
                        firstCard.find(".card-inner").removeClass("is-flipped");
                        secondCard.find(".card-inner").removeClass("is-flipped");
                        firstCard = null;
                        secondCard = null;
                        preventClick = false;
                    }, 1000);
                }
            }
        });
    }

    // Reset Game Function
    function resetGame() {
        $(".card-inner").removeClass("is-flipped"); // Flip all cards back to the start
        firstCard = null;
        secondCard = null;
        preventClick = false;
        matchedCards = 0;
        $("#game-content").hide();
        $("#welcome-message").fadeIn(500); // Show the welcome message to restart the game
    }
});