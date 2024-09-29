$(document).ready(function() {
    // Start Game Button Click Event
    $("#start-game").click(function() {
        // Hide the welcome message and show the game content after clicking start
        $("#welcome-message").fadeOut(500, function() {
            $("#game-content").fadeIn(500);
        });
    });

    // Reset Game Function
    function resetGame() {
        $(".card-inner").removeClass("is-flipped");
        $("#game-content").hide();
        $("#welcome-message").fadeIn(500);
    }

    // Play Again function
    $("#play-again, #try-again").click(function() {
        $("#win-message, #fail-message").fadeOut(500, function() {
            resetGame();
        });
    });


    // Card Click Event for Flipping The Cards
    $(".card").click(function() {
        $(this).find(".card-inner").toggleClass("is-flipped");
    });
});