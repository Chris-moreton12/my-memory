$(document).ready(function() {
    // Start Game Button Click Event
    $("#start-game").click(function() {
        // Hide the welcome message and show the game content after clicking start
        $("#welcome-message").fadeOut(500, function() {
            $("#game-content").fadeIn(500);
        });
    });

    // Card Click Event for Flipping The Cards
    $(".card").click(function() {
        $(this).find(".card-inner").toggleClass("is-flipped");
    });
});
