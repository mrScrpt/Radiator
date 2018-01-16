$(function() {
        $(".certificates__control").on("click", function(event) {
            event.preventDefault();
            $(".certificates__drop").toggleClass("certificates__drop--hidden certificates__drop--visible");
        })
});

