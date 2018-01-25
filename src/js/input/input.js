$(function() {
        $(".input__control").on("focus", function(event) {
            event.preventDefault();

            $(this).parent('.input__box').addClass("input__box--focus");
        });

    $(".input__control").on("focusout", function(event) {
        event.preventDefault();
        $(this).parent('.input__box').removeClass("input__box--focus");
    });


});
