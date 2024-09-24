$(document).ready(function() {
    $('.card').click(function() {
        $(this).find('.card-inner').toggleClass('is-flipped');
    });
});